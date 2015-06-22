(function() {
	var passConfirmation = function() {
		return {
			require: "ngModel",
			scope: {
				otherModelValue: "=passConfirmation"
			},
			link: function(scope, element, attributes, ngModel) {
				ngModel.$validators.passConfirmation = function(modelValue) {
					return modelValue == scope.otherModelValue;
				};

				scope.$watch("otherModelValue", function() {
					ngModel.$validate();
				});
			}
		};
	};

	angular.module('taApplication').directive('passConfirmation', passConfirmation);

}());