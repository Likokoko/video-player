const video = document.querySelector("video");
const audio = document.querySelector("audio")
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar")

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    if (video.paused) {
      video.play();
      audio.play();
    } else {
      video.pause();
      audio.pause()
    }
  }
});

 video.addEventListener("timeupdate", function() {
   progress.value = video.currentTime / video.duration;
   if(progress.value===1){
    audio.pause()
   }
 });