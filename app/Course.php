<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model {

	protected $table = "courses";

	protected $fillable = ['number', 'name', 'description'];

}
