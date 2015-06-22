<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApplicationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('applications', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('semester');
			$table->string('year');
			$table->string('uid');
			$table->string('student_type');
			$table->string('requested_course');
			$table->text('additional_details');
			$table->string('international_student');
			$table->string('origin_country')->nullable();
			$table->integer('recommendation_level')->default(0);
			$table->integer('user_id')->unsigned();
			$table->foreign('user_id')->references('id')->on('users');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('applications');
	}

}
