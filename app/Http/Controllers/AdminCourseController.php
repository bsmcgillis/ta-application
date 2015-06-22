<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\User;
use App\Application;
use App\Course;

use DB;
use Response;

class AdminCourseController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$courses = Course::all();
		$arrayCourses = [];

		foreach ($courses as $course){

			$applications = DB::table('users')
				->join('applications', 'users.id', '=', 'applications.user_id')
				->whereRaw('applications.requested_course = ?', [$course->number])
				->select('users.name', 'users.uid', 'users.email', 'applications.semester', 
					'applications.year', 'applications.student_type', 'applications.requested_course',
					'applications.additional_details', 'applications.recommendation_level', 'applications.id')
				->get();
		
			$courseArray = $course->toArray();

			$courseArray['applications'] = $applications;

			array_push($arrayCourses, $courseArray);
		}

		return Response::json(['data' => $arrayCourses], 200);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
