var modal = document.getElementsByClassName("modal");

function modalshow(number){
    modal[number].style.display = "block";
    
    var span = document.getElementsByClassName("modal")[number];

    span.onclick = function() {
        modal[number].style.display = "none";
}

console.log(modal[0]);


  }

//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }