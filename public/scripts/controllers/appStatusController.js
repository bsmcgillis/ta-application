(function(){

	var AppStatusController = function($scope, $rootScope, taApplicationFactory){

		taApplicationFactory.clearSuccessInfo();
		taApplicationFactory.updateRootScope();

		taApplicationFactory.getApplications()
			.success(function(response){
				console.log(response.data);

				angular.forEach(response.data, function(value, key){
					response.data[key].created_at = new Date(response.data[key].created_at.replace(/-/g,"/"));

					$scope.applications = response.data;
				})				
			})
			.error(function(data, status, headers, config){
				console.log(data);
			})

		$scope.deleteApp = function(appId) {
			console.log("deleting app with id " + appId);

			taApplicationFactory.deleteApplication(appId)
				.success(function(response){
					console.log(response);
					if (response.code == 200){
						console.log("Application deleted");
						angular.forEach($scope.applications, function(value, key){
							if ($scope.applications[key].id == appId){
								$scope.applications.splice(key, 1);
								return;
							}
						})
					}
					else {
						console.log("Application was not deleted");
					}
				})
				.error(function(data, status, headers, config){
					console.log(data);
				})

			//Now, what I need this to do is hit the delete method of the application controller on the server
			//As well as delete the deleted class from the current scope.
		};

	};

	AppStatusController.$inject = ['$scope', '$rootScope', 'taApplicationFactory'];

	angular.module('taApplication').controller('AppStatusController', AppStatusController);

}());