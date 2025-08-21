document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.querySelector(".play-button");
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("youtube-iframe");
  const closeModal = document.querySelector(".close-modal");

  const videoUrl =
    "https://www.youtube.com/embed/I1JgulbyWa0?si=6d6LYH5DyCxNKpPI";

  playBtn.addEventListener("click", () => {
    iframe.src = videoUrl;
    modal.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  });
});
document.getElementById("video-cover").addEventListener("click", function () {
  const iframe = document.getElementById("video-iframe");
  iframe.style.display = "block";
  this.style.display = "none";
  const src = iframe.src;
  if (!src.includes("autoplay=1")) {
    iframe.src = src + (src.includes("?") ? "&" : "?") + "autoplay=1";
  }
  iframe.contentWindow.postMessage(
    '{"event":"command","func":"playVideo","args":""}',
    "*"
  );
});
