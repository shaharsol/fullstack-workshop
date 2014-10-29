'use strict';

angular.module('serverApp')
  .controller('SearchCtrl', ['$scope', 'search', function ($scope, search) {
    $scope.results = [];

    $scope.search = function () {
      search.do($scope.query, function(data){
        $scope.results = data.items;
        $scope.$digest();
      });
    };


  }]);
