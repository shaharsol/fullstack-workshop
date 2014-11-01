'use strict';

angular.module('serverApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('player', {
        url: '/player',
        templateUrl: 'app/player/player.html',
        controller: 'PlayerCtrl'
      });
  });