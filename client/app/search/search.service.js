'use strict';

angular.module('serverApp')
  .service('search', ['youtubeApi', function (youtubeApi) {
    var gapi = youtubeApi.getApiClient();

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
