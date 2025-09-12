// Array para guardar los productos
let carrito = [];

// Función para agregar un producto
function agregarProducto(nombre) {
  carrito.push(nombre);
  actualizarCarrito();
  
  // Animación visual cuando se agrega
  const lista = document.getElementById("lista-carrito");
  const items = lista.getElementsByTagName("li");
  if (items.length > 0) {
    items[items.length - 1].classList.add("agregado");
    setTimeout(() => items[items.length - 1].classList.remove("agregado"), 1000);
  }

  // También actualizamos el carrito offcanvas si existe
  actualizarCarritoOffcanvas();
}

// Función para eliminar el último producto
function eliminarProducto() {
  if (carrito.length > 0) {
    carrito.pop();
    actualizarCarrito();
    actualizarCarritoOffcanvas();

    // Animación cuando se elimina
    const lista = document.getElementById("lista-carrito");
    if (lista.lastChild) {
      lista.lastChild.classList.add("eliminado");
      setTimeout(() => lista.lastChild.remove(), 500);
    }
  }
}

// Actualiza la lista del carrito (en la card principal)
function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.innerHTML = '<li class="list-group-item text-muted text-center">No hay productos</li>';
  } else {
    carrito.forEach((producto) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.textContent = producto;

      // Botón eliminar individual
      const btnEliminar = document.createElement("button");
      btnEliminar.className = "btn btn-sm btn-danger";
      btnEliminar.textContent = "X";
      btnEliminar.onclick = () => {
        carrito = carrito.filter((p) => p !== producto);
        actualizarCarrito();
        actualizarCarritoOffcanvas();
      };

      li.appendChild(btnEliminar);
      lista.appendChild(li);
    });
  }
}

// Actualiza el carrito dentro del offcanvas lateral
function actualizarCarritoOffcanvas() {
  const lista = document.getElementById("lista-carrito-offcanvas");
  if (!lista) return;

  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.innerHTML = '<li class="list-group-item text-muted text-center">No hay productos</li>';
  } else {
    carrito.forEach((producto) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.textContent = producto;

      // Botón eliminar individual
      const btnEliminar = document.createElement("button");
      btnEliminar.className = "btn btn-sm btn-danger";
      btnEliminar.textContent = "X";
      btnEliminar.onclick = () => {
        carrito = carrito.filter((p) => p !== producto);
        actualizarCarrito();
        actualizarCarritoOffcanvas();
      };

      li.appendChild(btnEliminar);
      lista.appendChild(li);
    });
  }
}
