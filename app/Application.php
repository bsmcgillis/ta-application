<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model {

	protected $table = "applications";

	protected $fillable = [
		'semester', 
		'year', 
		'uid', 
		'student_type', 
		'requested_course',
		'additional_details',
		'international_student',
		'origin_country',
		'recommendation_level',
		'user_id'
	];

	public function owner(){
		return $this->belongsTo('App\User', 'user_id');
	}

}
