 'use strict';
/**
 * @ngdoc function
 * @name dairyFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dairyFrontendApp
 */



 app.controller('DashboardCtrl',['$scope','Restangular','$localStorage','$timeout' ,'$rootScope','$location' ,function ($scope, Restangular,$localStorage, $timeout,$rootScope,$location,RestangularProvider) {
$('document').ready(function(){
		$("#home").addClass("active");
	});


 	$scope.getDate = function(){
  		$scope.newDate = new Date();
 	};

 	$scope.dateChangeEvent = function(){
 		$scope.getTodaysRecord();
 		$scope.getExpenses();
 	};

 	getRecords();
 	function getRecords(){
 		$scope.getDate();
 		var params = {
 			"auth_token" : localStorage.getItem("auth_token")
 		}

 		Restangular.all("/record/list").customPOST(params).then(function(response){
 			$scope.records = response.data;
 		});
 		Restangular.all("/expense/all").customPOST(params).then(function(response){
 		console.log(response);
 		$scope.expenses = response.allExpenses;
 	});

 	};

 	var record = [{"id" : "",	"morning" : "",	"afternoon" : "",	"evening" : "",	"night" : "",
 	"read" : "","bath": "", "sleep" : "",	"water" : "",	"health" : "","exercise" : "",
 	"place" : "",	"comments" : ""}];

 	$scope.getTodaysRecord = function(){
 		var getTodaysRecordParams = {
 			"auth_token" : localStorage.getItem("auth_token"),
 			"date" : $("#date").val().split("-").reverse().join("-")
 		}
 		Restangular.all("/record/today").customPOST(getTodaysRecordParams).then(function(response){
 			if (response.data.length <=0){
 				$scope.recordFormInput=record;
 			}else
 			{
 				$scope.recordFormInput = response.data;
 			}
 		});
 	};


 	$scope.addRecord = function(){
 		var addRecordParams = {
 			"auth_token" : localStorage.getItem("auth_token"),
 			"record" : $scope.recordFormInput,
 			"date" : $("#date").val().split("-").reverse().join("-")
 		}
 		Restangular.one("/record/create").customPOST(addRecordParams).then(function(response){
 			$scope.recordAddedSuccessfuly = false;
 			$scope.failedToCreateRecord = false;
 			if(response.status == 200){
 				$scope.recordAddedSuccessfuly = true;
 				getRecords();
 			}else{
 				$scope.failedToCreateRecord = true;
 			}
 		});

 	};

 	$scope.getExpenses = function(){
 		var getExpenseParams = {
 			"auth_token" : localStorage.getItem("auth_token"),
 			"date" : $("#date").val().split("-").reverse().join("-")
 		}
 		Restangular.one("/expense/list").customPOST(getExpenseParams).then(function(response){
 			console.log(response.today_expense);
 			$scope.expenseFormInput = response.today_expense;
 			
 		});

 	};


 	$scope.addExpenseField = function(){
 		$scope.expenseFormInput.push({"product" : "", "got" : "", "spent" : "", "change" : ""});
 	};
 	$scope.removeExpenseField = function(index , id){
 		$scope.expenseFormInput.splice(index , 1);
 		var removeExpenseFieldParams = {
 			"auth_token" : localStorage.getItem("auth_token"),
 			"expense_id" : id
 		}
 		Restangular.one("/expense/delete").customPOST(removeExpenseFieldParams).then(function(response){
 			console.log(response.message);
 		});

 	};
 	$scope.addExpense = function(){
 		console.log($scope.expenseFormInput);
 		var addExpenseParams = {
 			"auth_token" : localStorage.getItem("auth_token"),
 			"date" : $("#date").val().split("-").reverse().join("-"),
 			"expense" : $scope.expenseFormInput
 		};
 		
 		console.log($scope.expenseFormInput);
 		Restangular.one("/expense/create").customPOST(addExpenseParams).then(function(response){
 			getRecords();
 		});

 	};

 }]);


