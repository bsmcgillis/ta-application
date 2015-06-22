<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\User;

class UserTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		for ($i = 1; $i < 6; $i++) {
			User::create
			(
				[
					'name' => "User $i",
					'uid' => "u012345$i",
					'email' => "user$i@users.com",
					'password' => bcrypt('pass'),
				]
			);
		}
	}

}