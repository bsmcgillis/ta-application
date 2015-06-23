<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class UpdateApplicationRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		if(! is_null(Request::get('recommendation_level')))
		{
			return [
				'recommendation_level' => 'required'
			];
		}
		else {
			return [
				'selected_semester' => 'required',
				'selected_year' => 'required',
				'student_uid' => 'required',
				'selected_student_type' => 'required',
				'selected_course' => 'required',
				'addit_info' => 'required',
				'intl_student' => 'required'
			];
		}

	}

}
