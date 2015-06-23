(function(){

	var RegistrationController = function($scope, $rootScope, taApplicationFactory, $cookies, $location) {

		taApplicationFactory.clearSuccessInfo();

		$scope.uidPattern = /^[U|u]\d{7}$/;

		$scope.submitRegistration = function() {
			if($scope.registrationForm.$valid){
				taApplicationFactory.getCSRF()
					.success(function(response){
						$scope.registration._token = response.csrfToken;

						taApplicationFactory.postRegister($scope.registration)
							.success(function(response){
								if(response.loggedIn){
									$cookies.loggedIn = $rootScope.loggedIn = true;
									$cookies.userName = $rootScope.userName = response.name;
									$cookies.uid = $rootScope.uid = response.uid;
									$cookies.role = $rootScope.role = response.role;

									$rootScope.csrf = $scope.registration._token;
									$rootScope.registrationSuccess = response.message;
									$location.path('/');
								}
								else {
									console.log(response);
								}
							})
							.error(function(data, status, headers, config){
								console.log(data);
								if(data.email){
									$scope.registrationError = data.email[0];
								}
								else if(data.name) {
									$scope.registrationError = data.name[0];
								}
								else if(data.password) {
									$scope.registrationError = data.password[0];
								}
								else if(data.uid) {
									$scope.registrationError = data.uid[0];
								}
							})
					})
					.error(function(data, status, headers, config){
						console.log(data);
					})
			}
		};
	};

	RegistrationController.$inject = ['$scope', '$rootScope', 'taApplicationFactory', '$cookies', '$location'];

	angular.module('taApplication').controller('RegistrationController', RegistrationController);
}());