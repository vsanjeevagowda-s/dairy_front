'use strict';

/**
 * @ngdoc function
 * @name dairyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dairyFrontendApp
 */

 app.controller('LoginCtrl',['$scope' ,'Restangular','$location','$rootScope' ,  function ($scope, Restangular, $location,$rootScope) {

 	$scope.login =function(){
 		var params = {
 			"email" : $scope.login.email,
 			"password" : $scope.login.password
 		}
 		Restangular.one("/api/login").customPOST(params).then(function(response){
 			console.log(response);
 			if(response.status==200){
 				$rootScope.loggedIn = true;
 				localStorage.setItem("auth_token",response.auth_token);
 				$location.path("/dashboard");
 			}else{
 				$location.path("/");
 				$scope.failed_login = true;
 			}
 		});
 	};


 	var logout={
 		"auth_token" : localStorage.getItem("auth_token")
 	}
 	Restangular.one("/api/logout").customPOST(logout).then(function(response){
 	});

 	
 }]);

