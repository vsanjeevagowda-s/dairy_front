'use strict';

/**
 * @ngdoc function
 * @name dairyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dairyFrontendApp
 */

  app.controller('LoginCtrl',['$scope' , function ($scope) {

  	$scope.login =function(){
 		var params = {
 			"email" : $scope.login.email,
 			"password" : $scope.login.password
 		}

 		
 	}
   
  }]);
