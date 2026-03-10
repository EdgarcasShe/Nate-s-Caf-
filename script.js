//imagen//

const imagenes = document.querySelectorAll('.producto-card img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('imagen-grande');
const cerrar = document.querySelector('.cerrar');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('mostrar');
    modalImg.src = img.src;
  });
});

cerrar.addEventListener('click', () => {
  modal.classList.remove('mostrar');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('mostrar');
  }
});

//carrito de compras//

let contador = 0;
let total = 0;

const contadorElemento = document.getElementById('contador');
const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');
const carritoPanel = document.getElementById('carrito-panel');
const carritoIcon = document.querySelector('.carrito-icon');

// Agrega producto//
function agregarCarrito(nombre, precio) {

  contador++;
  total += precio;

  contadorElemento.textContent = contador;
  totalElemento.textContent = total;

  const li = document.createElement('li');
  li.classList.add('item-carrito');

  li.innerHTML = `
    <span>${nombre} - Q${precio}</span>
    <button class="eliminar">✖</button>
  `;

  listaCarrito.appendChild(li);

  //boton de eliminar producto//
  li.querySelector('.eliminar').addEventListener('click', () => {
    contador--;
    total -= precio;

    contadorElemento.textContent = contador;
    totalElemento.textContent = total;

    li.remove();
  });

  carritoPanel.classList.add('activo');
}


// Abrir producto//
carritoIcon.addEventListener('click', () => {
  carritoPanel.classList.add('activo');
});


// cerrar producto//
function cerrarCarrito() {
  carritoPanel.classList.remove('activo');
}


// vaciar carrito//
function vaciarCarrito() {
  contador = 0;
  total = 0;

  contadorElemento.textContent = 0;
  totalElemento.textContent = 0;

  listaCarrito.innerHTML = "";
}
