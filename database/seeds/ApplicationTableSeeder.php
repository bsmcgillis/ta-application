<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\Application;

class ApplicationTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{

		Application::create(
			[
				'semester' => 'Fall', 
				'year' => '2016', 
				'uid' => 'u0123450', 
				'student_type' => 'Undergraduate', 
				'requested_course' => '1000',
				'additional_details' => 'Here are some additional details for you',
				'international_student' => 'Yes',
				'origin_country' => 'Uruguay',
				'user_id' => '3'
			]
		);

		Application::create(
			[
				'semester' => 'Spring',
				'year' => '2017',
				'uid' => 'u0123451',
				'student_type' => 'Graduate',
				'requested_course' => '1100',
				'additional_details' => 'Here are my additional details',
				'international_student' => 'No',
				'user_id' => '4'
			]
		);
	}
}