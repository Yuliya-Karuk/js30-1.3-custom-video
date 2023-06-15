/* SELECTORS */
const player = document.querySelector('.video');
const video = player.querySelector('.main-video');
const poster = document.querySelector('.poster');
const middlePlay = document.querySelector('.middle-play-btn')

// controls
const controlPlay = player.querySelector('.play-btn');
const svgPlay = player.querySelector('.play-svg');
const svgPause = player.querySelector('.pause-svg');
const buttonVolume = player.querySelector('.volume-btn');
const svgVolume = player.querySelector('.volume-svg');
const svgMute = player.querySelector('.mute-svg');
const controlVolume = player.querySelector('.volume');
const controlTimer = player.querySelector('.timer');
const buttonScreen = player.querySelector('.screen-btn');
const svgFullscreen = player.querySelector('.fullscreen-svg');
const svgSmallscreen = player.querySelector('.smallscreen-svg');

video.removeAttribute('controls');

function togglePlay() {
    if (video.paused) {
        video.play();
        middlePlay.classList.add('visually-hidden')
        svgPlay.classList.add('visually-hidden');
        svgPause.classList.remove('visually-hidden');
    } else {
        video.pause();
        middlePlay.classList.remove('visually-hidden')
        svgPlay.classList.remove('visually-hidden');
        svgPause.classList.add('visually-hidden');
    }
}

// функция которая изменяет ползунок звука
function changeVolume() { 
    if (video.muted === true) { 
        toggleVolume();
    }

    let volume = this.value;
    video.volume = volume;
    this.style.background = `linear-gradient(to right, var(--basic-yellow)  0%, var(--basic-yellow)  ${volume * 100}%, var(--basic-gray) ${volume * 100}%, var(--basic-gray) 100%)`;

    if (video.volume === 0) {
        video.muted = false;
        toggleVolume();
    }
}

// функция которая выключает/включает звук и меняет при этом кнопку
function toggleVolume() {
    if (!video.muted) {
        video.muted = true;
        svgVolume.classList.add('visually-hidden');
        svgMute.classList.remove('visually-hidden');
    } else {
        video.muted = false;
        svgMute.classList.add('visually-hidden');
        svgVolume.classList.remove('visually-hidden');
    }
}

// функция которая показывает изменение времени на ползунке времени
function handlerTimer() {
    const percent = (video.currentTime / video.duration) * 100;
    controlTimer.style.background = `linear-gradient(to right, var(--basic-yellow)  0%, var(--basic-yellow)  ${percent}%, var(--basic-gray) ${percent}%, var(--basic-gray) 100%)`;
    controlTimer.value = percent;
}

// функция, которая при клике на ползунке времени изменяет время 
function moveTimer() {
    const time = this.value;
    const progress = time * video.duration / 100;
    video.currentTime = progress;
}

// функция, которая убирает постер и включает видео
function hidePoster() {
    poster.classList.add('visually-hidden')
    middlePlay.classList.add('visually-hidden')
    togglePlay();
}

// функция, которая включает и выключает fullscreen
function toggleScreen() {
  if (document.fullscreenElement === null) {
    console.log('bla')
    svgFullscreen.classList.add('visually-hidden');
    svgSmallscreen.classList.remove('visually-hidden');
    player.requestFullscreen();

  } else {
    svgSmallscreen.classList.add('visually-hidden');
    svgFullscreen.classList.remove('visually-hidden');
    document.exitFullscreen();

    }
}

poster.addEventListener('click', hidePoster) // убрать постер при клике на него
middlePlay.addEventListener('click', hidePoster) // включать и выключать видео при клике на большую кнопку посередине видео
video.addEventListener('click', togglePlay); // play и pause при клике на видео
controlPlay.addEventListener('click', togglePlay); // play и pause при клике на кнопку Play/Pause
buttonVolume.addEventListener('click', toggleVolume); // mute и unmute звук при клике на кнопку звука
controlVolume.addEventListener('input', changeVolume); // изменение звука на ползунке
video.addEventListener('timeupdate', handlerTimer); // изменение ползунка времени при просмотре видео
controlTimer.addEventListener('input', moveTimer); // изменение времени при клике на ползунок времени
buttonScreen.addEventListener('click', toggleScreen) //изменение fullscreen/ smallscreen при клике на кнопку