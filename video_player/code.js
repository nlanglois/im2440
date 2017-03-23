/**
 * Created by nlangloi10 on 7/27/16.
 */


// This says that the code inside (which will be a function later on; we haven't written it yet) will be executed once the page's DOM has loaded.

// This differs from document.onload() which only runs the JS in it after ALL resources (or assets) have been loaded (or downloaded) that are embedded in the page that that calls the document.onload()

document.addEventListener("DOMContentLoaded", function()
{
    // we'll call our initializing function here once we write it!!
    startVideoPlayer();

}, false);




/* used to store video player object */
var videoPlayer;

/* contains the progress bar HTML element */
var bar;
























//  Sets the videoPlayer variable to the video ID in the page
function startVideoPlayer()
{
    videoPlayer = document.getElementById("video");

    /* sends the specified video to the video object
        when the page is first loaded.
     */
    loadVideo("Predator");

    /* turn off browser-based video element controls which are available by default */
    videoPlayer.controls = false;

    console.log("Video element's controls now disabled.");



    /* first element node whose class name is "progress-bar" */
    //var bar = document.getElementsByTagName('progress');

    /* says to run the updateProgressBar method each millisecond after the videoPlayer is started */
    videoPlayer.addEventListener("timeupdate", updateProgressBar, false);

    videoPlayer.ontimeupdate = function() { currentTimeInVideo() };


    console.log("Progress bar initialized.");
}





function currentTimeInVideo() {
    // Display the current position of the video in a p element
    document.getElementById("currentTimeInVideo").innerHTML = videoPlayer.currentTime;
}











function replayVideo() {
    resetPlayer();
    videoPlayer.play();
}


function resetPlayer() {
    videoPlayer.currentTime = 0;
    changeButton(document.getElementById("play-pause-btn"), 'play');
}















/* I could've done something like this:
function loadVideo(video, poster) {

}

HTML call to this method would then look something like this:
onclick="loadVideo('Big_Buck_Bunny.mp4', 'Big_Buck_Bunny_Poster.jpg')"
 */


/* receives argument indicating which video to play */
function loadVideo(name) {

    /* sets the src attribute of videoPlayer object to the new video path */
    videoPlayer.src = "video/" + name + ".mp4";

    /* breaks up the passed-in filename (video) into an array where the separating element is a period (.) */
    /*  fileName[0] would be "Big_Buck_Bunny"
        fileName[1] would be "mp4"
     */
    //var fileName = video.split('.');

    /* uses the first part of the filename as the name of the poster */
    //var poster = fileName[0];

    /* creates the path to the video's poster */
    var posterPath = "poster/" + name + ".jpg";

    /* sets the new posterPath variable as the poster attribute of the videoPlayer */
    videoPlayer.poster = posterPath;


    //var bar = document.getElementsByTagName('progress');
    //bar.value = 0;
    //bar.attributes[1] = 0;

    videoPlayer.load();
    resetPlayer();

}






























//  Used to set all the button attributes at once
function changeButton(btn, value) {
    btn.innerHTML = value.capitalize();
    btn.title = value.capitalize();
    btn.className = value;
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
























//  Handles stopping the video
function stopVideo() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;

    var button = document.getElementById("play-pause-btn");
    changeButton(button, "play");

    console.log("Video stopped.");
}
























//  Handles changing the volume of the player
function changeVolume() {
    videoPlayer.volume = document.getElementById("volume").value;

    console.log("Volume changed to " + videoPlayer.volume);
}
























//  Handles toggling the mute state of the video object
function toggleMute() {
    var btn = document.getElementById("mute-btn");

    if (videoPlayer.muted) {
        changeButton(btn, "mute");
        videoPlayer.muted = false;

        console.log("Audio now un-muted.");


    } else {
        changeButton(btn, "un-mute");
        videoPlayer.muted = true;

        console.log("Audio now muted.");


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

    /* sets the percentage amount inside the <progress> tags (innerHTML) */

    //bar.firstChild

    bar.childNodes[1].innerHTML = percentComplete + "%";
    //bar.getElementsByTagName('span')[0].innerHTML = percentComplete;

    /* increases the width of the progress bar element as the video plays */
    //bar.style.width = Math.floor((videoPlayer.currentTime / videoPlayer.duration) * 100) + '%';

}



// function updateProgressBar() {
//     var progressBar = document.getElementById('progress-bar');
//     var percentage = Math.floor((100 / mediaPlayer.duration) *
//         mediaPlayer.currentTime);
//     progressBar.value = percentage;
//     progressBar.innerHTML = percentage + '% played';
// }




















/*  Sends video to full-screen mode */
function fullScreen() {

    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
        videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
        videoPlayer.webkitRequestFullscreen();
    }

    //videoPlayer.webkitRequestFullScreen();
    console.log("Trying to go to full-screen mode.");
}

















/*  Capitalizes a passed-in string */
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}






















/*  Rewinds or fast-forwards the video by x milliseconds */
function rwAndFfVideo(dir, amt) {

    var pbr = videoPlayer.playbackRate;
    var pbr_lower_btn = document.getElementById("rewind-btn");


    /* This is what's known as a "ternary operator", which is basically
        just a if / else statement, really concisely put
     */
    (pbr == 0.5) ? pbr_lower_btn.disabled = true : pbr_lower_btn.disabled = false;
    /*
        The above ternary operator is literally the same thing as what's
        written below. It's just more concise than doing an actual
        if-else statement. Same thing, otherwise.
    if (pbr == 0.5) {
        pbr_lower_btn.disabled = true;
    } else {
        pbr_lower_btn.disabled = false;
    }
    */


    if (dir == "rw") {
        videoPlayer.playbackRate -= amt;
    } else if (dir == "ff") {
        videoPlayer.playbackRate += amt;
    }

    console.log("New playback rate: " + videoPlayer.playbackRate + ".");
}














