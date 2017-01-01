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
 			debugger;
 			if(response.status==200){
 				debugger;
 				$rootScope.loggedIn = true;
 			debugger;
 			localStorage.setItem("auth_token",response.auth_token);
 			debugger;
 			// location.reload();
 			debugger;
 				$location.path("/dashboard");
 				debugger;
 			}else{
 				debugger;
 				$location.path("/");
 				debugger;
 				$scope.failed_login = true;
 			}
 		});

 		
 	};
   
  }]);
