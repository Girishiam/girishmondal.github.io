function openImage(imageSrc) {
  document.getElementById("fullImage").src = imageSrc;
  document.getElementById("imageOverlay").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageOverlay").style.display = "none";
}
