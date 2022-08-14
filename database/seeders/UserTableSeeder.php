<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@moonton.test',
            'password' => bcrypt('password'),
        ]);

        $user = User::create([
            'name' => 'User',
            'email' => 'user@moonton.test',
            'password' => bcrypt('password'),
        ]);

        $user->assignRole('user');

        $admin->assignRole('admin');

    }
}
