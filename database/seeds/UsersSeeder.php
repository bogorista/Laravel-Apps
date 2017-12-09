<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user1=User::create(['name'=>'eduardo','email'=>'hello@bogordesain.com','password'=>bcrypt('gorengcau');
        $user1->assignRole('admin');
    }
}
