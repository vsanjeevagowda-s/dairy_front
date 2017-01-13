 'use strict';

 app.controller('RecordsCtrl',['$scope','Restangular','$localStorage','$timeout' ,'$rootScope','$location' ,function ($scope, Restangular,$localStorage, $timeout,$rootScope,$location,RestangularProvider) {

getRecords();
function getRecords(){
	var params = {
 		"auth_token" : localStorage.getItem("auth_token")
 	}

 	Restangular.all("/record/list").customPOST(params).then(function(response){
 		console.log(response);
 		$scope.records = response.data;
 	});

};


 }]);