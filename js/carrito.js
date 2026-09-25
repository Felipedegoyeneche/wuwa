const productos = [
  { id: 1, nombre: 'Character Plush Keychain', precio: 21139,
    imagen: 'https://cdn.shopify.com/s/files/1/0887/5340/6254/files/wuthering-waves-character-plush-keychain-33-1_2.jpg?v=1789623964&width=300' },
  { id: 2, nombre: 'Mini Resonator Series Nuigurumi Plush Vol.2', precio: 24024,
    imagen: 'https://cdn.shopify.com/s/files/1/0887/5340/6254/files/wuthering-waves-mini-resonator-series-nuigurumi-plush-vol-2-1_1.jpg?v=1769491414&width=300' },
  { id: 3, nombre: 'FURYU MOCHIPICO Plush', precio: 35585,
    imagen: 'https://cdn.shopify.com/s/files/1/0887/5340/6254/files/wuwa-furyu-mochipico-plush_1.png?v=1765431726&width=300' },
  { id: 4, nombre: '【 Pre order 】Fluffy Companions Series Plush Doll', precio: 57705,
    imagen: 'https://cdn.shopify.com/s/files/1/0887/5340/6254/files/wuthering-waves-fluffy-companions-series-plush-doll-new_1.jpg?v=1780540449&width=300' }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function formatoPrecio(valor) {
  return '$' + valor.toLocaleString('es-CL');
}

function mostrarProductos() {
  const contenedor = document.getElementById('contenedor-productos');
  contenedor.innerHTML = '';
  productos.forEach(prod => {
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <p>${prod.nombre}</p>
        <p>${formatoPrecio(prod.precio)}</p>
        <button class="btn" onclick="agregar(${prod.id})">Agregar</button>
      </div>`;
  });
}

function mostrarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  if (carrito.length === 0) {
    lista.innerHTML = '<li>El carrito está vacío</li>';
  }
  carrito.forEach(prod => {
    lista.innerHTML += `
      <li>
        ${prod.nombre} x ${prod.cantidad} - ${formatoPrecio(prod.precio * prod.cantidad)}
        <button class="btn btn-secundario" onclick="quitar(${prod.id})">Quitar</button>
      </li>`;
  });

  const total = carrito.reduce((suma, prod) => suma + prod.precio * prod.cantidad, 0);
  document.getElementById('total').textContent = formatoPrecio(total);
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregar(id) {
  const enCarrito = carrito.find(prod => prod.id === id);
  if (enCarrito) {
    enCarrito.cantidad++;
  } else {
    const producto = productos.find(prod => prod.id === id);
    carrito.push({ ...producto, cantidad: 1 });
  }
  mostrarCarrito();
}

function quitar(id) {
  carrito = carrito.filter(prod => prod.id !== id);
  mostrarCarrito();
}

document.getElementById('vaciar-carrito').onclick = function () {
  carrito = [];
  mostrarCarrito();
};

mostrarProductos();
mostrarCarrito();
