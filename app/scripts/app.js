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
  'ng-token-auth'
  'restangular'
  ]);
 app.config(function ($routeProvider,$authProvider, RestangularProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
    
  })
  .when('/signup', {
    templateUrl: 'views/signup.html',
    controller: 'SignupCtrl'
    
  })
  .otherwise({
    redirectTo: '/'
  });
 RestangularProvider.setBaseUrl('http://localhost:3000/api/v1');
});
