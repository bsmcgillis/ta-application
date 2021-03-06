(function () {
	var taApplicationFactory = function($http, $cookies, $rootScope) {
		var factory = {};

		factory.postLogin = function(user) {
			return $http.post('/ta-application/auth/login', user);
		};

		factory.getLoginInfo = function() {
			if ($cookies.loggedIn) {
				var user = {};
				user.loggedIn = true;
				user.userName = $cookies.userName;
				user.uid = $cookies.uid;
				user.role = $cookies.role;

				return user;
			}
			return false;
		};

		factory.getLogout = function(user) {
			return $http.get('/ta-application/auth/logout', user);
		};

		factory.postRegister = function(user) {
			return $http.post('/ta-application/auth/register', user);
		};

		factory.postApplication = function(application) {
			return $http.post('/ta-application/ta_applications', application);
		};		

		factory.adminUpdateApplication = function(applicationId, appUpdate){
			return $http.put('/ta-application/ta_applications/' + applicationId, appUpdate);
		};

		factory.updateApplication = function(applicationId, appUpdate){
			return $http.put('/ta-application/ta_applications/' + applicationId, appUpdate);
			//This was missing a slash before ta_applications. I assume that was a typo
		};

		factory.deleteApplication = function(appId){
			return $http.delete('/ta-application/ta_applications/' + appId);
		};

		factory.getApplications = function() {
			return $http.get('/ta-application/ta_applications');
		};

		factory.getApplication = function(appId) {
			return $http.get('/ta-application/ta_applications/' + appId)
		};

		factory.updateRootScope = function() {
			if ($cookies.loggedIn) {
				$rootScope.loggedIn = true;
				$rootScope.userName = $cookies.userName;
				$rootScope.uid = $cookies.uid;
				$rootScope.role = $cookies.role;
			}
		};

		factory.getCSRF = function() {
			return $http.get('/ta-application/auth/csrf');
		};

		factory.clearSuccessInfo = function() {
			if ($rootScope.loginSuccess){
				delete $rootScope.loginSuccess;
			}
			if ($rootScope.logoutSuccess){
				delete $rootScope.logoutSuccess;
			}
			if ($rootScope.registrationSuccess){
				delete $rootScope.registrationSuccess;
			}
			if ($rootScope.appCreationSuccess){
				delete $rootScope.appCreationSuccess;
			}
			if ($rootScope.appUpdateSuccess){
				delete $rootScope.appUpdateSuccess;
			}
		};

		factory.getAllCourses = function() {
			return $http.get('/ta-application/courses');
		};

		factory.getCoursesWithTAs = function() {
			return $http.get('/ta-application/admin/courses_list');
			//This was also missing a slash at the beginning
		};

		factory.addSelectValuesToScope = function(scope){
			scope.semesters = [
				{semester : "Fall"},
				{semester : "Spring"}
			];

			scope.years = [
				{year : "2016"},
				{year : "2017"},
				{year : "2018"},
				{year : "2019"}
			];

			scope.student_types = [
				{stuType : "Undergraduate"},
				{stuType : "Graduate"}
			];	
		};

		factory.getValueIndex = function(valArray, thisValue, category){
			
			for (i = 0; i < valArray.length; i++){
				if (category == "semester")
					if (valArray[i].semester == thisValue){
						return i;
					}
				if (category == "year"){
					if (valArray[i].year == thisValue){
						return i;
					}
				}
				if (category == "student_type"){
					if (valArray[i].stuType == thisValue){
						return i;
					}
				}
				if (category == "course"){
					if (valArray[i].number == thisValue){
						return i;
					}
				}
			}

		};

		return factory;
	};

	taApplicationFactory.$inject = ['$http', '$cookies', '$rootScope'];

	angular.module('taApplication').factory('taApplicationFactory', taApplicationFactory);

}());