const videoContainer = document.getElementById('jsVideoPlayer');
const videoPlayer = document.querySelector('#jsVideoPlayer video');
const playButton = document.getElementById('jsPlayButton');
const volumeButton = document.getElementById('jsVolumeButton');
const fullScreenButton = document.getElementById('jsFullScreen');

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function setFullScreen() {
  videoContainer.webkitRequestFullscreen();
  fullScreenButton.innerHTML = '<i class="fas fa-compress"></i>';
  fullScreenButton.removeEventListener('click', setFullScreen);
  fullScreenButton.addEventListener('click', exitFullScreen);
}

function exitFullScreen() {
  document.webkitExitFullscreen();
  fullScreenButton.innerHTML = '<i class="fas fa-expand"></i>';
  fullScreenButton.removeEventListener('click', exitFullScreen);
  fullScreenButton.addEventListener('click', setFullScreen);
}

function init() {
  playButton.addEventListener('click', handlePlayClick);
  volumeButton.addEventListener('click', handleVolumeClick);
  fullScreenButton.addEventListener('click', setFullScreen);
}

if (videoContainer) {
  init();
}
