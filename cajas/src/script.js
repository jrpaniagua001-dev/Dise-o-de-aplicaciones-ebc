// desafio de las cajas// 

// Desafío 1: cambiar el título .getElementById//

document.getElementById("btn-titulo").addEventListener("click", () => {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Ricardo Paniagua";
});

 // Desafío 2: cambiar el color de las cajas con getElementsByClassName //

document.getElementById("btn-cajas").addEventListener("click", () => {
    const cajas = document.getElementsByClassName("caja");
    
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].style.backgroundColor = "green"; 
    }
});
// Desafío 3: cambiar el color de la primera caja con querySelector //

document.getElementById("btn-primera").addEventListener("click", () => {
    const primeraCaja = document.querySelector(".caja");
    primeraCaja.style.backgroundColor = "blue";
});
// Desafío 4: querySelectorAll() cambiarle el borde a todas las cajas //

document.getElementById("btn-bordes").addEventListener("click", () => {
    const cajas = document.querySelectorAll(".caja");

    cajas.forEach(caja => {
        caja.style.border = "4px solid #C827F5";
    });
});