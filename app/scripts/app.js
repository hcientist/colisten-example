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
    'ngTouch',
    'btford.socket-io'
  ])
  .factory('colistenSocket', function (socketFactory) {
    var myIoSocket = io.connect('/');

    var colistenSocket = socketFactory({
      ioSocket: myIoSocket
    });

    return colistenSocket;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/michael', {
        templateUrl: 'views/michael.html',
        controller: 'CommunicationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
