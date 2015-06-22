(function() {

	var AppShowController = function($scope, $rootScope, taApplicationFactory, $routeParams) {

		taApplicationFactory.clearSuccessInfo();
		taApplicationFactory.updateRootScope();	

		$scope.edit = true;

		taApplicationFactory.addSelectValuesToScope($scope);
		taApplicationFactory.getAllCourses()
			.success(function(response){
				$scope.courses = response.data;
			})
			.error(function(data, status, headers, config){
				console.log(data);
			})

		taApplicationFactory.getApplication($routeParams.appId)
			.success(function(response) {
				console.log(response);

				data = response.data;
				thisCourse = $scope.courses[taApplicationFactory.getValueIndex($scope.courses, data.requested_course, "course")];

				$scope.application = {};
				$scope.application.selected_semester = 
					$scope.semesters[taApplicationFactory.getValueIndex($scope.semesters, data.semester, "semester")];			
				$scope.application.selected_year = 
					$scope.years[taApplicationFactory.getValueIndex($scope.years, data.year, "year")];
				$scope.application.selected_student_type = 
					$scope.student_types[taApplicationFactory
					.getValueIndex($scope.student_types, data.student_type, "student_type")];					
				$scope.application.student_uid = response.data.uid;
				$scope.application.selected_course = thisCourse.number + " - " + thisCourse.name;
				$scope.application.addit_info = response.data.additional_details;
				$scope.application.intl_student = response.data.international_student;
				$scope.application.country_origin = response.data.origin_country;
			})
			.error(function(data, status, headers, config) {
				console.log(data);
			})

		taApplicationFactory.getAllCourses()
			.success(function(response){	
				console.log(response.data);
				$scope.courses = response.data;
			})
			.error(function(data, status, headers, config){
				console.log(data);
			})

		$scope.updateApp = function() {
			console.log("This fired");
		}

	};

	AppShowController.$inject = ['$scope', '$rootScope', 'taApplicationFactory', '$routeParams'];

	angular.module('taApplication').controller('AppShowController', AppShowController);

}());