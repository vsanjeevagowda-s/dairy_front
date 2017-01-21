'use strict';
app.controller('DayCtrl',['$scope','Restangular','$localStorage','$timeout', '$route' ,'$rootScope','$location' ,function ($scope, Restangular,$localStorage, $timeout,$rootScope,$location,RestangularProvider, $route) {

	$('document').ready(function(){
		$("#day").addClass("active");
		$("#expences").addClass("active");
	});



// pie chart
$scope.labels_pie = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
$scope.data_pie = [300, 500, 100];




}]);