// create references to the modal...
var modal = document.getElementById('modal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('thumbnail');
// image in the modal
var modalImg = document.getElementsById("cryptoImg");
// the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = ;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}