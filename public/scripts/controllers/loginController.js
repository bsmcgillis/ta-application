(function() {

	var LoginController = function($scope, $rootScope, taApplicationFactory, $cookies, $location) {

		taApplicationFactory.clearSuccessInfo();

		$scope.submitLogin = function() {
			if ($scope.loginForm.$valid) {
				taApplicationFactory.getCSRF()
					.success(function(response)
					{
						$scope.user._token = response.csrfToken;
						taApplicationFactory.postLogin($scope.user)
							.success(function(response)
							{
								if(response.loggedIn)
								{
									$cookies.loggedIn = $rootScope.loggedIn = true;
									$cookies.userName = $rootScope.userName = response.name;
									$cookies.uid = $rootScope.uid = response.uid;
									$cookies.role = $rootScope.role = response.role;
								
									$rootScope.csrf = $scope.user._token;

									$rootScope.loginSuccess = response.message;

									$location.path('/');
								}
								else
								{
									$scope.loginError = response.error;
								}
								
							})
							.error(function(data, status, headers, config)
							{
								console.log(data);
							})
					})
					.error(function(data, status, headers, config)
					{
						console.log(data);
					})
			}
		};
	};

	LoginController.$inject = ['$scope', '$rootScope', 'taApplicationFactory', '$cookies', '$location'];

	angular.module('taApplication').controller('LoginController', LoginController);
}());