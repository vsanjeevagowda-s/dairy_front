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
  'restangular'
  ]);
 app.config(function ($routeProvider, RestangularProvider) {
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
  .otherwise({
    redirectTo: '/'
  });

 RestangularProvider.setBaseUrl('https://diary-back.herokuapp.com');
  
});


