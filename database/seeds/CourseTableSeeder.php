<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\Course;

class CourseTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{

		$courseNames = array(
			'Engineering Computing',
			'Eng Computing MATLAB',
			'Explor in Computer Sci',
			'Introduction to CS',
			'Object-Oriented Prog',
			'Discrete Structures',
			'Intro Alg & Data Struct',
			'Industry Forum',
			'Eng Prob Stats',
			'Intro Sci Comp'
		);

		$courseNumber = 1000;
		foreach ($courseNames as $course) {
			Course::create(
				[
					'number' => $courseNumber,
					'name' => $course,
					'description' => "The description for $course"
				]
			);

			$courseNumber = $courseNumber + 100;
		}
	}
}