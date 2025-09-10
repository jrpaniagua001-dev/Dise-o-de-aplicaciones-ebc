// Array de imágenes de refrescos
const imagenes = [
  "https://tse1.mm.bing.net/th/id/OIP.O50AMYWjVR80Ua8LP2macgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", // botella
  "https://tse4.mm.bing.net/th/id/OIP.n3PGRVAge1Xqv2ce5A-LlgHaER?rs=1&pid=ImgDetMain&o=7&rm=3",  // coca
  "https://lacriaturacreativa.com/wp-content/uploads/2022/05/sprite-nueva-imagen08.jpg",  // fanta
  "https://tse4.mm.bing.net/th/id/OIP.hkYJS-4f9un4g_EzTSomFwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",  // sprite
  "https://tse3.mm.bing.net/th/id/OIP.CXvC-q8us2zTVvulWCTCOwHaGD?rs=1&pid=ImgDetMain&o=7&rm=3",  // lata
  "https://thefoodtech.com/wp-content/uploads/2023/04/Pepsi-renueva-su-imagen.jpg" // varias botellas
];

// Selección de elementos
const boton = document.getElementById("btn-cambiar");
const imagenCard = document.getElementById("card-img");
const textoCard = document.getElementById("card-text");

// Contador de imágenes
let indice = 0;

// Evento del click
boton.addEventListener("click", () => {
  indice++;

  // Si llega al final, reinicia
  if (indice >= imagenes.length) {
    indice = 0;
  }

  // Cambiar imagen y texto
  imagenCard.src = imagenes[indice];
  textoCard.textContent = `Mostrando refresco ${indice + 1} de ${imagenes.length}`;
});
