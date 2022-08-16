<?php

use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\User\SubscriptionPlanController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['role:admin'])->group(function () {
});

Route::middleware(['role:user'])->group(function () {
});

Route::middleware(['auth', 'role:user'])->name('user.')->group(function () {
    Route::resource('dashboard', DashboardController::class)->only('index');
    Route::middleware('plan:true')->group(function () {
        Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show');
    });
    Route::middleware('plan:false')->group(function () {
        Route::get('/pricing', [SubscriptionPlanController::class, 'index'])->name('pricing');
        Route::post('/subscribe', [SubscriptionPlanController::class, 'subscribe'])->name('subscribe');
    });
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('dashboard', AdminDashboardController::class)->only('index');
    Route::resource('movies', AdminMovieController::class);
    // Route::resource('subscription-plan', SubscriptionPlanController::class)->only('index', 'create', 'store', 'edit', 'update', 'destroy');
});

Route::redirect('/', '/login');

// Route::prefix('slicing')->name('slicing.')->group(function () {
//     Route::get('/', function () {
//         return Inertia::render('Slicing/Index');
//     });
//     Route::get('/login', function () {
//         return Inertia::render('Slicing/Login');
//     })->name('login');
//     Route::get('/register', function () {
//         return Inertia::render('Slicing/Register');
//     })->name('register');
//     Route::get('/dashboard', function () {
//         return Inertia::render('Slicing/Dashboard');
//     })->name('dashboard');
//     Route::get('/movie/{slug}', function () {
//         return Inertia::render('Slicing/Movie/Show');
//     })->name('movie.show');
// });


require __DIR__.'/auth.php';
