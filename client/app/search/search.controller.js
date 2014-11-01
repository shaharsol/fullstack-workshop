'use strict';

angular.module('serverApp')
  .controller('SearchCtrl', ['$scope', 'search', 'video', function ($scope, search, video) {
    $scope.results = [];

    $scope.search = function () {
      search.do($scope.query, function (data) {
        $scope.results = data.items.map(function (item) {
          item.snippet.shortTitle = _.str.prune(item.snippet.description, 50);
          item.snippet.shortDescription = _.str.prune(item.snippet.description, 100);
          return item;
        });
        $scope.$digest();
      });
    };

    var isPlaying = {};
    $scope.playBtn = function(id){
      return (isPlaying[id])?'pause':'play';
    };

    $scope.play = function (id) {
      console.log('play ' + id);
      if(isPlaying[id.videoId])
      {
        video.sendCommand('pause', id);
        delete isPlaying[id.videoId];
      }
      else
      {
        video.sendCommand('play', id);
        isPlaying = {};
        isPlaying[id.videoId] = true;
      }

    };

    $scope.mute = function (id) {
      console.log('mute');
      video.sendCommand('mute', id);
    };

    $scope.volumeDown = function (id) {
      console.log('volumeDown');
      video.sendCommand('volumeDown', id);
    };

    $scope.volumeUp = function (id) {
      console.log('volumeUp');
      video.sendCommand('volumeUp', id);
    };

  }]);
