<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::get('/', function() 
{
	return view('index');
});

Route::get('auth/csrf', function() 
{
	return Response::json(['csrfToken' => csrf_token()]);
});

Route::resource('ta_applications', 'ApplicationController');

Route::resource('courses', 'CourseController');

Route::group(array('prefix' => 'admin'), function(){
	Route::resource('courses_list', 'AdminCourseController');
});

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);