(function(){

	var ManageApplicationsController = function($scope, $rootScope, taApplicationFactory) {

		taApplicationFactory.clearSuccessInfo();
		taApplicationFactory.updateRootScope();

		$scope.updateApp = {};

		$scope.rec_level_options = [
			{'level' : 'Not Interested', 'value' : '0'},
			{'level' : 'Possible', 'value' : '1'},
			{'level' : 'Recommended', 'value' : '2'},
			{'level' : 'Desired', 'value' : '3'},
			{'level' : 'Confirmed', 'value' : '4'}
		];

		$scope.recLevelText = function(recLevel) {
			angular.forEach($scope.rec_level_options, function(option){
				if (recLevel == option.value){
					$scope.recText = option.level;
					return;				
				}
			})
		};

		$scope.optionSelected = function(app, selected_value){
			$scope.updateApp.recommendation_level = selected_value;

			taApplicationFactory.adminUpdateApplication(app.id, $scope.updateApp)
				.success(function(response){
					app.recommendation_level = response.new_rec_level;
				})
				.error(function(data, status, headers, config){
					console.log(data);
				})

		};

		taApplicationFactory.getCoursesWithTAs()
			.success(function(response){
				$scope.courses = response.data;
			})
			.error(function(data, status, headers, config){
				console.log(data);
			})

	};

	ManageApplicationsController.$inject = ['$scope', '$rootScope', 'taApplicationFactory'];

	angular.module('taApplication').controller('ManageApplicationsController', ManageApplicationsController);

}());