'use strict';

angular.module('serverApp')
  .controller('SearchCtrl', ['$scope', 'search', function ($scope, search) {
    $scope.results = [];

    $scope.search = function () {
      search.do($scope.query, function(data){
        $scope.results = data.items.map(function(item){
          item.snippet.shortTitle  = _.str.prune(item.snippet.description, 50);
          item.snippet.shortDescription  = _.str.prune(item.snippet.description, 100);
          return item;
        });
        $scope.$digest();
      });
    };
  }]);
