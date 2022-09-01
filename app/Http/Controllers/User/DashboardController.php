<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $featuredMovies = Movie::whereIsFeatured(true)->get();
        $movies = Movie::orderBy('title')->get();

        return inertia('User/Dashboard/Index', compact('featuredMovies', 'movies'));
    }

    public function show(Movie $movie)
    {
        return inertia('User/Dashboard/Show', compact('movie'));
    }
}
