<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Models\Movie;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Gate;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    public function index()
    {
        if (Gate::denies('role_access')) {
            return redirect()->back();
        }
        return inertia('Admin/Role/Index', [
            'roles' => new Collection(Role::latest()->with('permissions')->paginate(10)),
            'permissions' => new Collection(Permission::all()),
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
        return inertia('Admin/Role/Create', [
            'permissions' => new Collection(Permission::all()),
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
        if (Gate::denies('role_create')) {
            return redirect()->back();
        }
        $request->validate([
            'name' => 'required|unique:roles,name',
            'permissions' => 'required|array',
        ]);

        $role = Role::create([
            'name' => $request->name,
        ]);

        $role->givePermissionTo($request->permissions);

        return redirect()->route('admin.roles.index')->with('flashMessage', [
            'type' => 'success',
            'message' => 'Role created successfully',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
        if (Gate::denies('role_edit')) {
            return redirect()->back();
        }
        return inertia('Admin/Role/Edit', [
            'role' => $role->load('permissions'),
            'permissions' => new Collection(Permission::all()),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        if (Gate::denies('role_edit')) {
            return redirect()->back();
        }
        $request->validate([
            'name' => 'required|unique:roles,name,' . $role->id,
            'permissions' => 'required|array',
        ]);

        $role->update([
            'name' => $request->name,
        ]);

        $role->syncPermissions($request->permissions);

        return redirect()->route('admin.roles.index')->with('flashMessage', [
            'type' => 'success',
            'message' => 'Role updated successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        if (Gate::denies('role_delete')) {
            return redirect()->back();
        }
        
        if($role->name == 'super-admin'){
            return redirect()->back()->with('flashMessage', [
                'type' => 'error',
                'message' => 'Super Admin role can not be deleted',
            ]);
        }

        if(User::role($role->name)->count() > 0){
            return redirect()->back()->with('flashMessage', [
                'type' => 'error',
                'message' => 'Role can not be deleted, because it is assigned to some users',
            ]);
        }

        $role->delete();

        return redirect()->route('admin.roles.index')->with('flashMessage', [
            'type' => 'success',
            'message' => 'Role deleted successfully',
        ]);
    }

    public function restore($role)
    {
        $restore = Role::onlyTrashed()->findOrFail($role);
        if ($restore) {
            return redirect()->route('admin.roles.index')->with('flashMessage', [
                'type' => 'success',
                'message' => 'Role restored successfully',
            ]);
        }
        return redirect()->route('admin.roles.index')->with('flashMessage', [
            'type' => 'error',
            'message' => 'Role not restored',
        ]);
    }

    public function forceDelete(Movie $movie)
    {
        $movie->forceDelete();
    }
}
