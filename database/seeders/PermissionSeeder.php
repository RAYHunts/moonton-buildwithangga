<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userPermissions = [
            'profile_access',
            'profile_edit',
            'profile_delete',
            'movie_access',
            'user_dashboard',
        ];

        $adminPermissions = [
            'user_access',
            'user_create',
            'user_update',
            'user_delete',
            'movie_access',
            'movie_create',
            'movie_update',
            'movie_delete',
            'admin_dashboard',
            'user_dashboard',
        ];

        $superAdminPermissions = [
            'user_access',
            'user_create',
            'user_update',
            'user_delete',
            'movie_access',
            'movie_create',
            'movie_update',
            'movie_delete',
            'role_access',
            'role_create',
            'role_update',
            'role_delete',
            'permission_access',
            'permission_create',
            'permission_update',
            'permission_delete',
            'admin_dashboard',
            'user_dashboard',
            'super-admin_dashboard',
            'profile_access',
            'profile_edit',
            'profile_delete',
        ];

        // foreach ($userPermissions as $permission) {
        //     Permission::create(['name' => $permission]);
        // }
        // foreach ($adminPermissions as $permission) {
        //     Permission::create(['name' => $permission]);
        // }
        foreach ($superAdminPermissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        Role::findOrCreate('user')->givePermissionTo($userPermissions);
        Role::findOrCreate('admin')->givePermissionTo($adminPermissions);
        Role::findOrCreate('super-admin')->givePermissionTo($superAdminPermissions);
    }
}