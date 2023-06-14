/* SELECTORS */
const player = document.querySelector('.video');
const video = player.querySelector('.main-video'); //для чего

// controls
const controlPlay = player.querySelector('.play-btn');
const svgPlay = player.querySelector('.play-svg');
const svgPause = player.querySelector('.pause-svg');
const buttonVolume = player.querySelector('.volume-btn');
const svgVolume = player.querySelector('.volume-svg');
const svgMute = player.querySelector('.mute-svg');
const controlVolume = player.querySelector('.volume');

// const controlRate = vidWrapper.querySelector('.player__slider[name="playbackRate"]');
// const controlSkip = vidWrapper.querySelectorAll('.player__button[data-skip]');
// const controlFullScreen = vidWrapper.querySelector('.player__fullscreen');
// const controlProgress = vidWrapper.querySelector('.progress');
// const progressBar = vidWrapper.querySelector('.progress__filled');

function togglePlay() {
    if (video.paused) {
        video.play()
        svgPlay.classList.add('visually-hidden');
        svgPause.classList.remove('visually-hidden');
    } else {
        video.pause()
        svgPlay.classList.remove('visually-hidden');
        svgPause.classList.add('visually-hidden');
    }
}

function updateVolume() {
    let volume = this.value;
    video.volume = volume;
}


function toggleVolume() {
    if (!video.muted) {
        video.muted = true
        svgVolume.classList.add('visually-hidden');
        svgMute.classList.remove('visually-hidden');
    } else {
        video.muted = false
        svgMute.classList.add('visually-hidden');
        svgVolume.classList.remove('visually-hidden');
    }
}

video.addEventListener('click', togglePlay) // play и pause при клике на видео
controlPlay.addEventListener('click', togglePlay) // play и pause при клике на кнопку Play/Pause

buttonVolume.addEventListener('click', toggleVolume) // mute и unmute звук при клике на кнопку звука

