(function(){

	var TAAppFormController = function($scope, $rootScope, $location, taApplicationFactory) {

		taApplicationFactory.clearSuccessInfo();
		taApplicationFactory.updateRootScope();

		//Adding uid to scope to use it in the form
		$scope.application = {};
		$scope.application.student_uid = $rootScope.uid;

		taApplicationFactory.addSelectValuesToScope($scope);

		taApplicationFactory.getAllCourses()
			.success(function(response){	
				console.log(response.data);
				$scope.courses = response.data;
			})
			.error(function(data, status, headers, config){
				console.log(data);
			})			

		$scope.submitApp = function() {

			if($scope.applicationForm.$valid) {
				$scope.application.selected_semester = $scope.application.selected_semester.semester;
				$scope.application.selected_year = $scope.application.selected_year.year;
				$scope.application.selected_course = $scope.application.selected_course.number;
				$scope.application.selected_student_type = $scope.application.selected_student_type.stuType;

				if ($scope.application.country_origin) {
					$scope.application.intl_student = "Yes";
				}
				else {
					$scope.application.intl_student = "No";
				}

				taApplicationFactory.postApplication($scope.application)
					.success(function(response){
						$rootScope.appCreationSuccess = response.message;						
						$location.path('/app_status');
					})
					.error(function(data, status, headers, config){
						console.log(data);
					})
			}
			else {
				console.log("Form was invalid");
			}

		};

	};

	TAAppFormController.$inject = ['$scope', '$rootScope', '$location', 'taApplicationFactory'];

	angular.module('taApplication').controller('TAAppFormController', TAAppFormController);

}());