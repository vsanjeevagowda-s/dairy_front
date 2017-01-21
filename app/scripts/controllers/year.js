'use strict';
 app.controller('YearCtrl',['$scope','Restangular','$localStorage','$timeout' ,'$rootScope','$location' ,function ($scope, Restangular,$localStorage, $timeout,$rootScope,$location,RestangularProvider) {
 			
$('document').ready(function(){
  $("#year").addClass("active");
  $("#expences").addClass("active");
});



 		}]);