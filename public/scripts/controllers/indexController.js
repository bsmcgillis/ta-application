(function() {

	var IndexController = function($scope, $rootScope, taApplicationFactory) {

		console.log("index controller called");

		var user = taApplicationFactory.getLoginInfo();

		if (user) {
			console.log("user was true");
			console.log(user);

			$rootScope.loggedIn = $scope.loggedIn = user.loggedIn;
			$rootScope.userName = $scope.userName = user.userName;
			$rootScope.uid = $scope.uid = user.uid;
			$rootScope.role = $scope.role = user.role;
		}
		else {

			console.log("user was false");

			delete $scope.loggedIn;
			delete $scope.userName;
			delete $scope.uid;
			delete $scope.role;
		}

	};

	IndexController.$inject = ['$scope', '$rootScope', 'taApplicationFactory'];

	angular.module('taApplication').controller('IndexController', IndexController);
}());