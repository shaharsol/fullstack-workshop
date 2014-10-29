'use strict';

angular.module('serverApp')
  .service('search', ['youtubeApi', function (youtubeApi) {
    var gapi = youtubeApi.getApiClient();
    gapi.client.setApiKey('AIzaSyCKaSsncd1Rj8uCXrSv5-6fL9HcYZxIShQ');
    gapi.client.load('youtube', 'v3', function() {
      console.log('API loaded');
    });
    return {
      'do': function(query, cb){
        //alert(query);
        var request = gapi.client.youtube.search.list({
          q: query,
          part: 'snippet',
          maxResults: 50,
          safeSearch: 'strict',
          type: 'video'
        });

        return request.execute(cb);
      }
    };
  }]);
