<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Http\Requests\CreateApplicationRequest;
use App\Http\Requests\UpdateApplicationRequest;

use Response;
use App\Application;
use App\Course;
use App\User;
use Auth;

use DB;

class ApplicationController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$user = Auth::user();
		// $applications = $user->applications;

		$applications = DB::table('applications')
			->join('courses', 'courses.number', '=', 'applications.requested_course')
			->whereRaw('applications.user_id = ?', [$user->id])
			->select('applications.created_at', 'applications.id', 'applications.recommendation_level',
				'applications.requested_course', 'applications.semester', 'applications.year', 'courses.name')
			->get();

		// $applications = DB::table('applications')
		// 	->whereRaw('applications.id = ?', [$user->id])
		// 	->get();

		if (!$applications){
			return Response::json(['message' => "No applications for user $user->id"], 200);
		}

		return Response::json(['data' => $applications], 200);
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
	public function store(CreateApplicationRequest $request)
	{
		$values = $request->only(
			'selected_semester', 
			'selected_year',
			'selected_course',
			'selected_student_type',
			'addit_info',
			'student_uid',
			'intl_student',
			'country_origin'
		);

		$user = Auth::user();

		Application::create(
			[
				'semester' => $request->get('selected_semester'),
				'year' => $request->get('selected_year'),
				'uid' => $request->get('student_uid'),
				'student_type' => $request->get('selected_student_type'),
				'requested_course' => $request->get('selected_course'),
				'additional_details' => $request->get('addit_info'),
				'international_student' => $request->get('intl_student'),
				'origin_country' => $request->get('country_origin'),
				'user_id' => $user->id
			]
		);

		return Response::json(['message' => 'Application has been created'], 200);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$application = Application::find($id);

		if (!$application){
			return Response::json(['message' => 'Application not found', 'code' => 404], 404);
		}

		return Response::json(['data' => $application, 'code' => 200], 200);
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
	public function update(UpdateApplicationRequest $request, $id)
	{
		if (! is_null($request->get('recommendation_level'))){
			$values = $request->only('recommendation_level');

			$application = Application::find($id);

			if (!$application){
				Response::json(['message' => 'Application not found']);
			}

			$application->recommendation_level = $request->get('recommendation_level');
			$application->save();


			return Response::json([
				'message' => 'Application Updated', 
				'new_rec_level' => $request->get('recommendation_level')
				], 200);
		}
		else {
			$application = Application::find($id);

			if (!$application){
				Response::json(['message' => 'Application not found']);
			}

			$application->semester = $request->get('selected_semester');
			$application->year = $request->get('selected_year');
			$application->uid = $request->get('student_uid');
			$application->student_type = $request->get('selected_student_type');
			$application->requested_course = $request->get('selected_course');
			$application->additional_details = $request->get('addit_info');
			$application->international_student = $request->get('intl_student');
			$application->origin_country = $request->get('country_origin');
			$application->save();

			return Response::json([
				'message' => 'Application Updated',				
			], 200);
		}
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$application = Application::find($id);

		if (!$application){
			return Response::json(['message' => 'Application does not exist', 'code' => 404], 404);
		}

		$application->delete();

		return Response::json(['message' => "Application with id $id has been deleted", 'code' => 200], 200);
	}

}
