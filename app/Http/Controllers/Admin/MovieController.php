<?php

namespace App\Http\Controllers\Admin;

use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Collection;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Gate::denies('movie_access')) {
            return redirect()->back();
        }
        $filter = $request->filter;
        return inertia('Admin/Movie/Index', [
            'movies' => new Collection(Movie::where('title', 'like', "%$filter%")->latest()->paginate(10)),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Gate::denies('movie_create')) {
            return redirect()->back();
        }
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Gate::denies('movie_create')) {
            return redirect()->back();
        }

        $validated = $request->validate([
            'title' => 'required',
            'thumbnail' => 'nullable',
            'category' => 'required',
            'is_featured' => 'nullable',
            'video_url' => 'required',
            'rating' => 'required',
        ]);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = "/" . "storage/" . $request->file('thumbnail')->storeAs('images/movie', uniqid() . '.' . $request->thumbnail->extension());
        }

        Movie::create($validated);

        return redirect()->route('admin.movies.index')->with('flashMessage', [
            'type' => 'success',
            'message' => 'Movie created successfully.',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Movie $movie)
    {
        if (Gate::denies('movie_update')) {
            return redirect()->back();
        }
        return inertia('Admin/Movie/Edit', [
            'movie' => $movie,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movie $movie)
    {
        if (Gate::denies('movie_update')) {
            return redirect()->back();
        }
        // $validated = $request->validate([

        // ]);
        $payload = $request->only(['title', 'thumbnail', 'category', 'is_featured', 'video_url', 'rating']);
        if ($request->hasFile('thumbnail')) {
            $payload['thumbnail'] = "/" . "storage/" . $request->file('thumbnail')->storeAs('images/movie', uniqid() . '.' . $request->thumbnail->extension());
            Storage::delete($movie->thumbnail);
        }
        $movie->update($payload);
        return redirect()->route('admin.movies.index')->with('flashMessage', [
            'type' => 'success',
            'message' => 'Movie updated successfully.',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        if (Gate::denies('movie_delete')) {
            return redirect()->back();
        }
        Storage::delete($movie->thumbnail);
        $movie->delete();
        return redirect()->route('admin.movies.index')->with('flashMessage', [
            'type' => 'info',
            'message' => 'Movie deleted successfully.',
            'more' => [
                'title' => 'Undo',
                'url' => route('admin.movies.restore', $movie->slug),
                'icon' => "fa-solid fa-trash-undo"              
            ]
        ]);
    }

    public function restore($movie_slug)
    {   
        $restore = Movie::onlyTrashed()->where('slug', $movie_slug)->restore();
        if ($restore) {
            return redirect()->route('admin.movies.index')->with('flashMessage', [
                'type' => 'success',
                'message' => 'Movie restored successfully.',
            ]);
        };
        return redirect()->route('admin.movies.index')->with('flashMessage', [
            'type' => 'error',
            'message' => 'Movie restore failed.',
        ]);
    }

    public function forceDelete(Movie $movie)
    {
        $movie->forceDelete();
    }
}