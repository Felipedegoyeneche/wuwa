// 1. Catálogo de productos disponible
const productos = [
  { id: 1, nombre: 'Character Plush Keychain', precio: 21139 },
  { id: 2, nombre: 'Mini Resonator Series Nuigurumi Plush Vol.2', precio: 24024 },
  { id: 3, nombre: 'FURYU MOCHIPICO Plush', precio: 35585 },
  {id:  4, nombre: '【 Pre order 】Fluffy Companions Series Plush Doll', precio: 57705}  
];


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


const contenedorProductos = document.getElementById('contenedor-productos');
const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');
const botonVaciar = document.getElementById('vaciar-carrito');


function mostrarProductos() {
  contenedorProductos.innerHTML = '';
  productos.forEach(prod => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
      <h3>${prod.nombre}</h3>
      <p>Precio: $${prod.precio}</p>
      <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
    `;
    contenedorProductos.appendChild(div);
  });
}


function agregarAlCarrito(id) {
  const existe = carrito.find(prod => prod.id === id);

  if (existe) {
    existe.cantidad++;
  } else {
    const productoEncontrado = productos.find(prod => prod.id === id);
    carrito.push({ ...productoEncontrado, cantidad: 1 });
  }

  guardarYActualizar();
}


function eliminarDelCarrito(id) {
  carrito = carrito.filter(prod => prod.id !== id);
  guardarYActualizar();
}

function actualizarCarritoHTML() {
  listaCarrito.innerHTML = '';

  carrito.forEach(prod => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${prod.nombre} x ${prod.cantidad} - $${prod.precio * prod.cantidad}
      <button onclick="eliminarDelCarrito(${prod.id})">❌</button>
    `;
    listaCarrito.appendChild(li);
  });


  const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
  totalElemento.textContent = total;
}

function guardarYActualizar() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarCarritoHTML();
}

botonVaciar.addEventListener('click', () => {
  carrito = [];
  guardarYActualizar();
});


mostrarProductos();
actualizarCarritoHTML();