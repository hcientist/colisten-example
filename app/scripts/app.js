'use strict';

/**
 * @ngdoc overview
 * @name colistenExampleApp
 * @description
 * # colistenExampleApp
 *
 * Main module of the application.
 */
angular
  .module('colistenExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/michael', {
        templateUrl: 'views/michael.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
