const video = document.querySelector("video");
const audio = document.querySelector("audio")
const progress = document.getElementById("progress");

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    if (video.paused) {
      video.play();
      audio.play();
    } else {
      video.pause();
      audio.pause()// how not to get video title moved
    }
  }
});

 video.addEventListener("timeupdate", function() {
   var percent = Math.floor((100 / video.duration) * video.currentTime);
   progress.value = percent;
   progress.style.width = `${(video.currentTime/ video.duration) * 100}%`
   console.log(percent)
   if(percent === 100){
    audio.pause()
   }
 });