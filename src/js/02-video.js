import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(`timeupdate`, throttle(onTimeupdate, 1000));

function onTimeupdate(data) {
  localStorage.setItem(`videoplayer-current-time`, JSON.stringify(data));
}

let savedTime = JSON.parse(localStorage.getItem(`videoplayer-current-time`));
if (savedTime !== null) {
  player
    .setCurrentTime(savedTime)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'Error':
          break;
        default:
          break;
      }
    });
}
