<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::query()->upsert([
            ['id' => 1, 'name' => 'lalchhanchhuaha', 'email' => 'ceo@tbccarrental.com', 'password' => Hash::make('password')],
            ['id' => 2, 'name' => 'test', 'email' => 'test@email.com', 'password' => Hash::make('password')]
        ],'id');
    }
}
