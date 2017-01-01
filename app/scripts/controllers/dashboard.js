'use strict';

/**
 * @ngdoc function
 * @name dairyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dairyFrontendApp
 */



  app.controller('DashboardCtrl',['$scope','Restangular','$localStorage','$timeout' ,'$rootScope','$location' ,function ($scope, Restangular,$localStorage, $timeout,$rootScope,$location,RestangularProvider) {

debugger;
var params = {
	"auth_token" : localStorage.getItem("auth_token")
}


 		Restangular.all("/record/list").customPOST(params).then(function(response){
 			debugger;
 			console.log(response);
 			$scope.records = response.data;
 			
 		});

  }]);
