'use strict';

angular.module('serverApp')
  .service('video', ['$window', function ($window) {
      return {
        sendCommand: function(type, id){
          $window.socket.emit(type, id);
        }
      }
  }]);
