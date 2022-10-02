import throttle from 'lodash.throttle';
// _.throttle(func, [(wait = 0)], [(options = {})]);

import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(`timeupdate`, throttle(onTimeupdate, 1000));
player.on(`play`, onPlay);

function onTimeupdate(data) {
  localStorage.setItem(`videoplayer-current-time`, data.seconds);
}

function onPlay(data) {
  let savedTime = localStorage.getItem(`videoplayer-current-time`);
  if (data.seconds !== savedTime) {
    player.setCurrentTime(savedTime);
  }
}
