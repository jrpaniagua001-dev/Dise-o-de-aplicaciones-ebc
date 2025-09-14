// Función para mostrar/ocultar comentarios
function myFunction(id) {
  let x = document.getElementById(id);
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else { 
    x.style.display = "none";
  }
}

// Función Like
function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = "✓ Liked";
}

// Slideshow automático cada 5s
let images = [
  "img/coche1.jpg",
  "img/coche2.jpg",
  "img/tecnologia1.jpg",
  "img/tecnologia2.jpg"
];
let index = 0;

function changeImage() {
  let slideshow = document.getElementById("slideshow");
  index = (index + 1) % images.length;
  slideshow.src = images[index];
}

setInterval(changeImage, 5000);
