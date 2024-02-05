document
  .querySelector("#transcriptBtn")
  .addEventListener("click", function (event) {
    const transcript = document.querySelector(".transcriptions");
    transcript.hidden = transcript.hidden ? false : true;
    transcript.ariaHidden = transcript.hidden;
  });

document.querySelector("#playBtn").addEventListener("click", function (event) {
  const media = document.querySelector("#media");
  media.play();
});
document.querySelector("#pauseBtn").addEventListener("click", function (event) {
  const media = document.querySelector("#media");
  media.pause();
});
document
  .querySelector("#forwardBtn")
  .addEventListener("click", function (event) {
    const media = document.querySelector("#media");
    media.currentTime += 3;
    if (media.currentTime >= media.duration || media.paused) {
      media.pause();
      media.currentTime = 0;
    }
    console.log(media.currentTime);
  });
document
  .querySelector("#rewindBtn")
  .addEventListener("click", function (event) {
    const media = document.querySelector("#media");
    media.currentTime -= 5;
  });
