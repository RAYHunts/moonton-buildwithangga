<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::redirect('/', '/slicing/login');

Route::prefix('slicing')->name('slicing.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Slicing/Index');
    });
    Route::get('/login', function () {
        return Inertia::render('Slicing/Login');
    })->name('login');
    Route::get('/register', function () {
        return Inertia::render('Slicing/Register');
    })->name('register');
    Route::get('/dashboard', function () {
        return Inertia::render('Slicing/Dashboard');
    })->name('dashboard');
    Route::get('/pricing', function () {
        return Inertia::render('Slicing/Pricing');
    })->name('pricing');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
