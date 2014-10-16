'use strict';

/**
 * @ngdoc function
 * @name colistenExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colistenExampleApp
 */
angular.module('colistenExampleApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.x =3;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.heyNow = function(x) {
      alert('hey!!!!!!'+ x);
    };

  });
