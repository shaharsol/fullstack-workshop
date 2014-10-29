'use strict';

angular.module('serverApp')
  .service('youtubeApi', ['$window', function ($window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var gapi = $window.gapi;
    gapi.client.setApiKey('AIzaSyCKaSsncd1Rj8uCXrSv5-6fL9HcYZxIShQ');
    gapi.client.load('youtube', 'v3', function() {
      console.log('API loaded');
    });
    return {
      getApiClient: function(){
        return gapi;
      }
    };
  }]);
