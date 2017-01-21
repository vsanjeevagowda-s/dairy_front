'use strict';

/**
 * @ngdoc overview
 * @name dairyFrontendApp
 * @description
 * # dairyFrontendApp
 *
 * Main module of the application.
 */
 var app=angular
 .module('dairyFrontendApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ngStorage',
  'restangular',
  'chart.js'
  ]);
 app.config(function ($routeProvider, RestangularProvider, ChartJsProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
    
  })
  .when("/signup", {
    templateUrl: 'views/signup.html',
    controller: 'SignupCtrl'
    
  })
  .when("/dashboard", {
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl'
    
  })
  .when("/records", {
    templateUrl: 'views/records.html',
    controller: 'RecordsCtrl'
    
  })
  .when("/day_expense", {
    templateUrl: 'views/day.html',
    controller: 'DayCtrl'
    
  })
  .when("/month_expense", {
    templateUrl: 'views/month.html',
    controller: 'MonthCtrl'
    
  })
  .when("/year_expense", {
    templateUrl: 'views/year.html',
    controller: 'YearCtrl'
    
  })
  .otherwise({
    redirectTo: '/'
  });

 RestangularProvider.setBaseUrl('https://diary-back.herokuapp.com');
  ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
});


//addRecordForm Directive
app.directive('addRecordForm', function(){
  return{
    templateUrl: "views/addRecordForm.html"

  }
});


app.directive('addExpenseForm', function(){
  return{
    templateUrl: "views/addExpenseForm.html"

  }
});

app.directive('navBar2', function(){
  return{
    templateUrl: "views/navbar2.html"

  }
});
app.directive('selectDate', function(){
  return{
    templateUrl: "views/selectDate.html"

  }
});

app.directive('expenseGraphViewSelect', function(){
  return{
    templateUrl: "views/expenseGraphViewSelect.html"

  }
});





