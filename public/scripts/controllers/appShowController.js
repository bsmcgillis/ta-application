(function() {

	var AppShowController = function($scope, $rootScope, taApplicationFactory, $routeParams, $location) {

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
				data = response.data;
				$scope.thisAppId = data.id;
				$scope.thisCourse = $scope.courses[taApplicationFactory.getValueIndex($scope.courses, data.requested_course, "course")];

				$scope.application = {};
				$scope.application.selected_semester = 
					$scope.semesters[taApplicationFactory.getValueIndex($scope.semesters, data.semester, "semester")];			
				$scope.application.selected_year = 
					$scope.years[taApplicationFactory.getValueIndex($scope.years, data.year, "year")];
				$scope.application.selected_student_type = 
					$scope.student_types[taApplicationFactory
					.getValueIndex($scope.student_types, data.student_type, "student_type")];					
				$scope.application.student_uid = response.data.uid;
				$scope.application.selected_course = $scope.thisCourse.number + " - " + $scope.thisCourse.name;
				$scope.application.addit_info = response.data.additional_details;
				$scope.application.intl_student = response.data.international_student;
				$scope.application.country_origin = response.data.origin_country;
			})
			.error(function(data, status, headers, config) {
				console.log(data);
			})

		taApplicationFactory.getAllCourses()
			.success(function(response){	
				$scope.courses = response.data;
			})
			.error(function(data, status, headers, config){
				console.log(data);
			})

		$scope.updateApp = function() {
			if ($scope.applicationForm.$valid){

				$scope.application.selected_semester = $scope.application.selected_semester.semester;
				$scope.application.selected_year = $scope.application.selected_year.year;
				$scope.application.selected_student_type = $scope.application.selected_student_type.stuType;
				$scope.application.selected_course = $scope.thisCourse.number;

				if ($scope.application.intl_student == "No") {	
					$scope.application.country_origin = null;				
				}

				taApplicationFactory.updateApplication($scope.thisAppId, $scope.application)
					.success(function(response){
						$rootScope.appUpdateSuccess = response.message;
						$location.path('/');
					})
					.error(function(data, status, headers, config){
						console.log(data);
					})
			}			
		}

	};

	AppShowController.$inject = ['$scope', '$rootScope', 'taApplicationFactory', '$routeParams', '$location'];

	angular.module('taApplication').controller('AppShowController', AppShowController);

}());