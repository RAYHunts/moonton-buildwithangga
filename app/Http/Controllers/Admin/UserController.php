<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Gate;
use Illuminate\Database\Eloquent\Collection;

class UserController extends Controller
{
    public function index(Request $request)
    {
        if (Gate::denies('user_access')) {
            return redirect()->back();
        }
        $filter = $request->filter;
        return inertia('Admin/User/Index', [
            'users' => new Collection(User::where('name', 'like', "%$filter%")->latest()->with('roles')->paginate(10)),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Gate::denies('user_create')) {
            return redirect()->back()->with('flashMessage', [
                'type' => 'error',
                'message' => 'You are not authorized to create a user',
            ]);
        }
        return redirect()->route('admin.users.index')->with('flashMessage', [
            'type' => 'error',
            'message' => 'Create user is not available',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        if (Gate::denies('user_edit')) {
            return redirect()->back()->with('flashMessage', [
                'type' => 'error',
                'message' => 'You are not authorized to edit a user',
            ]);
        }
        return redirect()->route('admin.users.index')->with('flashMessage', [
            'type' => 'error',
            'message' => 'Edit user is not available',
        ]);

        //     return inertia('Admin/User/Edit', [
        //         'user' => $user,
        //     ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        // 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        if (Gate::denies('user_delete')) {
            return redirect()->back()->with('flashMessage', [
                'type' => 'error',
                'message' => 'You are not authorized to delete a user',
            ]);
        }
        if ($user->id == auth()->user()->id) {
            return redirect()->back()->with('flashMessage', [
                'type' => 'error',
                'message' => 'You cannot delete yourself',
            ]);
        }

        if ($user->hasRole('super-admin')) {
            return redirect()->back()->with('flashMessage', [
                'type' => 'error',
                'message' => 'You cannot delete a super admin',
            ]);
        }

        if ($user->hasRole('admin') && !auth()->user()->hasRole('super-admin')) {
            return redirect()->back()->with('flashMessage', [
                'type' => 'error',
                'message' => 'You cannot delete an admin',
            ]);
        }

        $user->delete();

        return redirect()->route('admin.users.index')->with('flashMessage', [
            'type' => 'success',
            'message' => 'User deleted successfully',
            'more' => [
                'title' => 'Undo',
                'url' => route('admin.users.restore', $user->id),
                'icon' => "fa-solid fa-trash-undo"   
            ]
        ]);
    }

    public function restore($user)
    {
        $restore = User::onlyTrashed()->where('id', $user)->restore();
        if ($restore) {
            return redirect()->route('admin.users.index')->with('flashMessage', [
                'type' => 'success',
                'message' => 'User restored successfully',
            ]);
        }
        return redirect()->route('admin.users.index')->with('flashMessage', [
            'type' => 'error',
            'message' => 'User restore failed',
        ]);
    }

    public function forceDelete(user $user)
    {
        if (Gate::denies('user_delete')) {
            return redirect()->back()->with('flashMessage', [
                'type' => 'error',
                'message' => 'You are not authorized to delete a user',
            ]);
        }
        $user->forceDelete();
        return redirect()->route('admin.users.index')->with('flashMessage', [
            'type' => 'success',
            'message' => 'User deleted successfully',
        ]);
    }
}
