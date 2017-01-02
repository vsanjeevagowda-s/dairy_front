'use strict';

/**
 * @ngdoc function
 * @name dairyFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dairyFrontendApp
 */

 app.controller('SignupCtrl',['$scope' ,'Restangular','$location','$rootScope' ,  function ($scope, Restangular, $location,$rootScope) {
 	$scope.signup = function() {
 	
 		var params = { 
 				"user" :{
					 			"email" : $scope.user.email,
					 			"password" : $scope.user.password,
					 			"password_confirmation" : $scope.user.password_confirmation,
					 			"code" : $scope.user.code
 		}
 	}

 	Restangular.one("/api/create/user").customPOST(params).then(function(response){
 		console.log(response);
 		if(response.status==200){
 			$location.path("/");
 			$rootScope.user_created_successfuly = true;
 		}else{
 			$scope.failed_to_create_user = true;
 		}
 	});
 }
}]);
