'use strict';

/**
 * @ngdoc function
 * @name dairyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dairyFrontendApp
 */



 app.controller('DashboardCtrl',['$scope','Restangular','$localStorage','$timeout' ,'$rootScope','$location' ,function ($scope, Restangular,$localStorage, $timeout,$rootScope,$location,RestangularProvider) {

 	var params = {
 		"auth_token" : localStorage.getItem("auth_token")
 	}

 	Restangular.all("/record/list").customPOST(params).then(function(response){
 		console.log(response);
 		$scope.records = response.data;
 	});

 	$scope.addRecord = function(record){
 		console.log(record);
 		console.log($("#date").val().split("-").reverse().join("-"));
 		console.log("comments : "+record.comments);
 		var addRecordParams={ 
 			"auth_token" : localStorage.getItem("auth_token"),
 			"record" :{
 			
 			"date" : $("#date").val().split("-").reverse().join("-"),
 			"morning" : record.morning,
 			"afternoon" : record.afternoon,
 			"evening" : record.evening,
 			"night" : record.night,
 			"place" : record.place,
 			"comments" : record.comments
 		}
 	}
 	Restangular.one("/record/create").customPOST(addRecordParams).then(function(response){
 		console.log(response);
 		if(response.status == 200){
 			$scope.recordAddedSuccessfuly = true;
 		}else{
 			$scope.recordAddedSuccessfuly = false;
 		}
 	});

 	}; 	// addRecordFunctionends

 }]);
