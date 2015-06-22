<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\User;
use App\Role;
use App\Application;
use App\Course;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::statement('SET FOREIGN_KEY_CHECKS = 0');		
		Model::unguard();

		User::truncate();
		Role::truncate();
		Application::truncate();
		Course::truncate();

		$this->call('UserTableSeeder');	
		$this->call('RoleTableSeeder');
		$this->call('CourseTableSeeder');
		$this->call('ApplicationTableSeeder');
	}

}
