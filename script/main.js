// Function for song select on page loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loading").src = "song/GTA_IV.mp3";
  });
// Function for song select page loaded

// Function for lower or higher up sound in background, its working function in script but its not noted in text//
var play = false;
var vid = document.getElementById("loading");
vid.volume = 0.2;
window.addEventListener('keyup', function(e) {
    if (e.which == 38) { // ArrowDOWN
        vid.volume = Math.min(vid.volume + 0.025, 1);
    } else if (e.which == 40) { // ArrowUP
        vid.volume = Math.max(vid.volume - 0.025, 0);
    };
});
// Function for lower or higher up sound in background, its working function in script but its not noted in text//



// Function for pause and play music in background//
var audio = document.querySelector('audio');


if (audio) {

    window.addEventListener('keydown', function(event) {

        var key = event.which;
        var x = document.getElementById("text").innerText;
        var y = document.getElementById("text");

        if (key === 32 && x == "UNMUTE") { // spacebar
            
            event.preventDefault();

            audio.paused ? audio.play() : audio.pause();
            y.innerHTML = "MUTE";

        } else if (key === 32 && x == "MUTE") {

            event.preventDefault();

            audio.paused ? audio.play() : audio.pause();
            y.innerHTML = "UNMUTE";
        }
    });  
}
// Function for pause and play music in background//


  