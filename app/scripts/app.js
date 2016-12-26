'use strict';

/**
 * @ngdoc overview
 * @name dairyFrontendApp
 * @description
 * # dairyFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('dairyFrontendApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
  });
