(function() {

	var LogoutController = function($scope, $rootScope, $cookies, $location, taApplicationFactory) {

		$scope.user = {};
		$scope.user._token = $rootScope.csrf;

		taApplicationFactory.getLogout($scope.user)
			.success(function(response){

				delete $cookies["loggedIn"];
				delete $cookies["userName"];
				delete $cookies["uid"];
				delete $cookies["role"];
				delete $rootScope.loggedIn;
				delete $rootScope.userName;
				delete $rootScope.uid;
				delete $rootScope.role;

				taApplicationFactory.clearSuccessInfo();
				$rootScope.logoutSuccess = response.message;
				$location.path('/');
			})
			.error(function(data, status, headers, config){
				console.log(data);
			})

		
	};

	LogoutController.$inject = ['$scope', '$rootScope', '$cookies', '$location', 'taApplicationFactory'];

	angular.module('taApplication').controller('LogoutController', LogoutController);

}());