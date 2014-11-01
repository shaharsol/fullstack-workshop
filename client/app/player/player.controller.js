'use strict';

angular.module('serverApp')
  .controller('PlayerCtrl', function ($scope, $window) {
    $scope.message = 'Hello';

    $scope.player = $window.player;



  });
