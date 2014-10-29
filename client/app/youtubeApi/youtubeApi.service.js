'use strict';

angular.module('serverApp')
  .service('youtubeApi', ['$window', function ($window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var gapi = $window.gapi;
    return {
      getApiClient: function(){
        return gapi;
      }
    };
  }]);
