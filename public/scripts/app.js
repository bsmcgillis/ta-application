(function() {

	angular.module('taApplication', ['ngRoute', 'ngMessages', 'ngCookies']);

	angular.module('taApplication').config(function($routeProvider) {

	$routeProvider
		.when('/', {
			controller: 'IndexController',
			templateUrl: 'scripts/views/welcome.html'
		})

		.when('/ta_app_form', {
			controller: 'TAAppFormController',
			templateUrl: 'scripts/views/ta_app_form.html'
		})

		.when('/app_status', {
			controller: 'AppStatusController',
			templateUrl: 'scripts/views/app_status.html'
		})

		.when('/app_show/:appId', {
			controller: 'AppShowController',
			templateUrl: 'scripts/views/ta_app_form.html'
		})

		.when('/manage_apps', {
			controller: 'ManageApplicationsController',
			templateUrl: 'scripts/views/manage_apps.html'
		})

		.when('/login', {
			controller: 'LoginController',
			templateUrl: 'scripts/views/accounts/login_form.html'
		})

		.when('/register', {
			controller: 'RegistrationController',
			templateUrl: 'scripts/views/accounts/registration_form.html'
		})

		.when('/logout', {
			controller: 'LogoutController',
			template: '' //use template instead of templateUrl for blank space or you'll get an infinite loop
		})

		.otherwise({ redirectTo: '/' });
	});
	
}());