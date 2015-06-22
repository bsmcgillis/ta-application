<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class role extends Model {

	protected $table = "roles";

	protected $fillable = ['user_role', 'user_id'];

	public function owner() {
		return $this->belongsTo('App\User', 'user_id');
	}

}
