/**
 * Created by nlangloi10 on 7/20/16.
 */

document.addEventListener("DOMContentLoaded", function() {
    startPlayer();
}, false);



var player;

function startPlayer() {
    // player = document.getElementById('musicPlayer');
    player = document.querySelector('audio#musicPlayer');
    player.controls = false;
}

function playAudio() {
    player.play();
}

function pauseAudio() {
    player.pause();
}

function stopAudio() {
    player.pause();
    player.currentTime = 0;
}

function changeVolume() {
    player.volume = document.getElementById('changeVolume').value;
    // player.volume = $('#changeVolume').value;
}