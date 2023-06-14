/* SELECTORS */
const player = document.querySelector('.video');
const video = player.querySelector('.main-video');

// controls
const controlPlay = player.querySelector('.play-btn');
const svgPlay = player.querySelector('.play-svg');
const svgPause = player.querySelector('.pause-svg');
const buttonVolume = player.querySelector('.volume-btn');
const svgVolume = player.querySelector('.volume-svg');
const svgMute = player.querySelector('.mute-svg');
const controlVolume = player.querySelector('.volume');
const controlTimer = player.querySelector('.timer');

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

// функция которая изменяет ползунок звука
function changeVolume() { 
    if (video.muted === true) { 
        toggleVolume()
    }

    let volume = this.value;
    video.volume = volume;
    this.style.background = `linear-gradient(to right, #bdae82  0%, #bdae82  ${volume * 100}%, #c8c8c8 ${volume * 100}%, #c8c8c8 100%)`

    if (video.volume === 0) {
        video.muted = false
        toggleVolume()
    }
}

// функция которая выключает/включает звук и меняет при этом кнопку
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

// функция которая показывает изменение времени на ползунке времени
function handlerTimer() {
    const percent = (video.currentTime / video.duration) * 100;
    controlTimer.style.background = `linear-gradient(to right, #bdae82  0%, #bdae82  ${percent}%, #c8c8c8 ${percent}%, #c8c8c8 100%)`
    controlTimer.value = percent
}

// функция, которая при клике на ползунке времени изменяет время 
function moveTimer() {
    const time = this.value;
    const progress = time * video.duration / 100
    video.currentTime = progress
}

video.addEventListener('click', togglePlay) // play и pause при клике на видео
controlPlay.addEventListener('click', togglePlay) // play и pause при клике на кнопку Play/Pause
buttonVolume.addEventListener('click', toggleVolume) // mute и unmute звук при клике на кнопку звука
controlVolume.addEventListener('input', changeVolume) // изменение звука на ползунке
video.addEventListener('timeupdate', handlerTimer) // изменение ползунка времени при просмотре видео
controlTimer.addEventListener('input', moveTimer) // изменение времени при клике на ползунок времени