/**
 * Created by nlangloi10 on 1/24/17.
 */


document.addEventListener("DOMContentLoaded", function()
{
    // we'll call our initializing function here
    console.log("Initializing the video player.");
    startVideoPlayer();

}, false);























/* used to store video player object */
var videoPlayer;

/* contains the progress bar HTML element */
//var bar;







//  Sets the videoPlayer variable to the video ID in the page
function startVideoPlayer()
{
    videoPlayer = document.getElementById("video");

    /* turn off browser-based video element controls which are available by default */
    videoPlayer.controls = false;

    console.log("Video element's controls now disabled.");

    /* sends the specified video to the video object when the page is first loaded. */
    loadVideo("Predator");

    /* says to run the updateProgressBar method each millisecond after the videoPlayer is started */
    videoPlayer.addEventListener("timeupdate", updateProgressBar, false);

    //videoPlayer.ontimeupdate = function() { currentTimeInVideo() };

    //console.log("Progress bar initialized.");
}











/* receives argument indicating which video to play */
function loadVideo(name) {

    /* sets the src attribute of videoPlayer object to the new video path */
    videoPlayer.src = "videos/" + name + ".mp4";


    var bar = document.getElementsByTagName('progress')[0];
    bar.value = 0;


    setPoster(name);

    videoPlayer.load();
}










function setPoster(name) {
    /* creates the path to the video's poster */
    var posterPath = "posters/" + name + ".jpg";

    /* sets the new posterPath variable as the poster attribute of the videoPlayer */
    videoPlayer.poster = posterPath;

}












//  Handles both the play and pause video functionality in one button
function togglePlayPause() {
    //  stores the play/pause button element node in a variable
    var button = document.getElementById("play-pause-btn");

    /* grabs the src attribute of the videoPlayer object to show which video it is that is being played / paused */
    var video = videoPlayer.src;


    if (videoPlayer.paused || videoPlayer.ended) {
        changeButton(button, "pause");
        videoPlayer.play();

        console.log(video + " video now playing.");
    } else {
        changeButton(button, "play");
        videoPlayer.pause();

        console.log(video + " video paused.");
    }

}






/*  Updates the progress bar dynamically, every millisecond */
function updateProgressBar() {

    var bar = document.getElementsByTagName('progress')[0];


    /* duration of the video * the location of play-head of video */
    /* divided by 100 to give a small value */
    var percentComplete = Math.floor((100 / videoPlayer.duration) * videoPlayer.currentTime);

    /* sets the percent variable into the value attr of bar var */
    bar.value = percentComplete;


    document.getElementById("percentComplete").innerHTML = percentComplete + "%";

}











//  Handles stopping the video
function stopVideo() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;

    var button = document.getElementById("play-pause-btn");
    changeButton(button, "play");

    //bar.value = 0;

    // Deriving poster path from DOM
    var poster = videoPlayer.attributes[2].value;
    console.log("poster var: " + poster);

    // Returns an array of my poster string with each element in the array being broken around any / found in the poster string
    var posterPath = poster.split('/');
    var posterName = posterPath[1].split('.');

    var posterFileName = posterName[0];
    console.log("Poster file name: " + posterFileName);

    setPoster(posterFileName);
    videoPlayer.load();

    console.log("Video stopped.");
}





function replayVideo() {
    resetPlayer();
    videoPlayer.play();
}


function resetPlayer() {
    videoPlayer.currentTime = 0;
    changeButton(document.getElementById("play-pause-btn"), 'play');
}







/*  Rewinds or fast-forwards the video by x milliseconds */
function videoSpeed(dir, amt) {

    var pbr = videoPlayer.playbackRate;
    var pbr_lower_btn = document.getElementById("rewind-btn");


    /* This is what's known as a "ternary operator", which is basically
     just an if / else statement, really concisely put
     */
    (pbr < 0) ? pbr_lower_btn.disabled = true : pbr_lower_btn.disabled = false;
    /*
     The above ternary operator is literally the same thing as what's
     written below. It's just more concise than doing an actual
     if-else statement. Same thing, otherwise.
     if (pbr < 0.5) {
        pbr_lower_btn.disabled = true;
     } else {
        pbr_lower_btn.disabled = false;
     }
     */


    if (dir == "slower") {
        videoPlayer.playbackRate -= amt;
    } else if (dir == "faster") {
        videoPlayer.playbackRate += amt;
    }

    console.log("New playback rate: " + videoPlayer.playbackRate + ".");
}






















//  Handles toggling the mute state of the video object
function toggleMute() {
    var btn = document.getElementById("mute-btn");

    if (videoPlayer.muted) { // implies "true"
        changeButton(btn, "mute");
        videoPlayer.muted = false;

        console.log("Audio now un-muted.");

    } else {
        changeButton(btn, "un-mute");
        videoPlayer.muted = true;

        console.log("Audio now muted.");

    }
}













//  Handles changing the volume of the player
function changeVolume() {
    videoPlayer.volume = document.getElementById("volume").value;
    console.log("Volume changed to " + videoPlayer.volume);
}





















/*  Sends video to full-screen mode */
function fullScreen() {

    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
        videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
        videoPlayer.webkitRequestFullscreen();
    } else {
        alert("Sorry, your browser doesn't support full-screen videos.")
    }

    //videoPlayer.webkitRequestFullScreen();
    console.log("Trying to go to full-screen mode.");
}











//  Used to set all the button attributes at once
function changeButton(btn, value) {
    btn.innerHTML = value.capitalize();
    btn.title = value.capitalize();
    btn.className = value;
}
















function currentTimeInVideo() {
    // Display the current position of the video in the given node
    document.getElementById("currentTimeInVideo").childNodes[1].innerHTML = videoPlayer.currentTime;
}














/*  Capitalizes a passed-in string */
/*  The prototype property allows you to add new properties and methods to existing object types. */
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};






function readVideoFiles(dir) {
    var directory = './videos/';
    const fs = require('fs');
    fs.readdir(directory, (err, files) => {
        files.forEach(file => {
        console.log(file);
        });
    });
}