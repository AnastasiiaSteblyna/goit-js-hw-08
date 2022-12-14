import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));

function onTimeupdate(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}

let savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
