'use strict';

angular.module('serverApp')
  .controller('SearchCtrl', function ($scope) {
    $scope.results = [];

    $scope.search = function () {
      for(var i=0; i<10; i++){
        $scope.results.push({name:'name '+i});
      }
    };


  });
