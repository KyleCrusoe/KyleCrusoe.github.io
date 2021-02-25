var modal = document.getElementsByClassName("modal");
var image = document.getElementsByClassName("thumbnail");

for (var i = 0; i < image.length; i++) {
    var img = image[i];
    img.onclick = function(){
        var counter = i;
        modal[counter].style.display = "block";
    }

}

if 

console.log(modal[0]);