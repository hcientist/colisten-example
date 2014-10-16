'use strict';

angular.module('colistenExampleApp')
  .controller('CommunicationCtrl', function ($scope, colistenSocket) {

    var commContrlScope = $scope;

    $scope.x =3;
    $scope.data = [];

    $scope.groupMessages = [];

    $scope.message = "";

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.heyNow = function(x) {
      alert('hey!!!!!!'+ x);
    };

    $scope.sendMessage = function () {
      console.log($scope.message);
      colistenSocket.emit('msg', $scope.message);
    };

    colistenSocket.on('another-pipe', function (data) {
      $scope.data.push(data);
    });

    colistenSocket.on('group-messages', function (msg) {
      console.log('got group-messages', msg);
      commContrlScope.groupMessages.push(msg);
    });

  });
    