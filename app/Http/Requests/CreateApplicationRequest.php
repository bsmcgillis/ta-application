<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class CreateApplicationRequest extends Request {

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
		return [
			'selected_semester' => 'required',
			'selected_year' => 'required',
			'selected_course' => 'required',
			'selected_student_type' => 'required',
			'addit_info' => 'required',
			'student_uid' => 'required',
			'intl_student' => 'required'
		];
	}

	public function response(array $errors)
	{
		return response()->json(['message' => $errors, 'code' => 422], 422);
	}

}
