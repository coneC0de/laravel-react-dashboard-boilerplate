<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'avatar' => 'images/avatar.png',
            'firstname' => 'Demo',
            'lastname' => 'Demo',
            'email' => 'demo@demo.com',
            'password' => \Illuminate\Support\Facades\Hash::make("123456"),
            'role' => 'user'
        ]);

        User::create([
            'avatar' => 'images/avatar.png',
            'firstname' => 'Admin',
            'lastname' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => \Illuminate\Support\Facades\Hash::make("123456"),
            'role' => 'admin'
        ]);

        User::create([
            'avatar' => 'images/avatar.png',
            'firstname' => 'Super',
            'lastname' => 'Admin',
            'email' => 'super@admin.com',
            'password' => \Illuminate\Support\Facades\Hash::make("123456"),
            'role' => 'super_admin'
        ]);

    }
}
