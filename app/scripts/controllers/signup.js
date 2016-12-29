'use strict';

/**
 * @ngdoc function
 * @name dairyFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dairyFrontendApp
 */

 app.controller('SignupCtrl',['$scope' ,  function ($scope, $auth) {
 	 $scope.signup = function() {
 	 	debugger;
 		var params = {
 			"email" : $scope.user.email,
 			"password" : $scope.user.password,
 			"password_confirmation" : $scope.user.password_confirmation
 		}
 	}
 }]);
