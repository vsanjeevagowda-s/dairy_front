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

 	$scope.addRecord = function(){
 		debugger;
 		var addRecordParams={ 
 			"auth_token" : localStorage.getItem("auth_token"),
 			"record" :{
 				"date" : $("#date").val().split("-").reverse().join("-"),
 				// "morning" : $scope.morning,
 				// "afternoon" : $scope.afternoon,
 				// "evening" : $scope.evening,
 				// "night" : $scope.night,
 				// "place" : $scope.place,
 				"comments" : $scope.comments
 			}
 		}
 		Restangular.one("/record/create").customPOST(addRecordParams).then(function(response){
 			console.log(response);
 			$scope.recordAddedSuccessfuly = false;
 			$scope.failedToCreateRecord = false;
 			if(response.status == 200){
 				debugger;
 				$scope.recordAddedSuccessfuly = true;
 			}else{
 				$scope.failedToCreateRecord = true;
 			}
 		});

 	}; 	// addRecordFunctionends

 }]);


//addRecordForm Directive
app.directive('addRecordForm', function(){
	return{
		templateUrl: "../app/views/addRecordForm.html"

	}
});