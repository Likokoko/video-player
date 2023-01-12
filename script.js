const video = document.querySelector("video");
const audio = document.querySelector("audio");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");
const videoCT = document.querySelector(".videoCurrentTime");
const expand = document.querySelector(".fa-expand");
const buttonArea = document.querySelector(".buttonArea");

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    if (video.paused) {
      video.play();
      audio.play();
    } else {
      video.pause();
      audio.pause();
    }
  }
});

video.addEventListener("timeupdate", function () {
  progress.value = video.currentTime / video.duration;
  if (progress.value === 1) {
    audio.pause();
  }
});

video.ontimeupdate = function () {
  let currentTime = video.currentTime;
  let minutes = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime % 60);
  let formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  let DuMinutes = Math.floor(video.duration / 60);
  let DuSeconds = Math.floor(video.duration % 60);
  if (DuMinutes < 10) {
    minutes = "0" + minutes;
  }
  if (DuSeconds < 10) {
    seconds = "0" + seconds;
  }
  let vidDuration = `${DuMinutes + ":" + DuSeconds}`;
  videoCT.innerText = formattedTime + "" + "/" + "" + vidDuration;
};

function expandGo() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }

}

