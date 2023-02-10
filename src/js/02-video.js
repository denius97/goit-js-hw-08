import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const player = new Player('vimeo-player');

player
  .setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')))
  .catch(function (error) {
    console.log('Error set time', error);
  });

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);
