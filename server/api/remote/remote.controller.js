/**
 * Created by assafgannon on 11/1/14.
 */
var logger = require('../../logger');

module.exports = function (socket) {

  socket.on('play', api.play);
  socket.on('pause', api.pause);
  socket.on('stop', api.stop);
  socket.on('volume', api.volume);
  socket.on('mute', api.mute);


};

var api = {
  play: function (options) {
    logger.log('debug', 'play', options);
  },
  pause: function (options) {
    logger.log('debug', 'pause', options);
  },
  stop: function (options) {
    logger.log('debug', 'stop', options);
  },
  volume: function (options) {
    logger.log('debug', 'volume', options);
  },
  mute: function (options) {
    logger.log('debug', 'mute', options);
  }
};
