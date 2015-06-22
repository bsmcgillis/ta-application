<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\User;
use App\Role;

class RoleTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{

		$users = User::all();

		$i = 1;
		foreach ($users as $user){

			Role::create
			(
				[
					'user_role' => $i < 3 ? 'admin' : 'applicant',
					'user_id' => "$user->id"
				]
			);

		$i++;
		}

	}

}