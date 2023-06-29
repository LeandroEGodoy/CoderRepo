class Producto {
  constructor(id, nombre, precio, description){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.description = description;
  }
}

const productos = [
  new Producto(1, 'Croma Ragnarok', 30 , 'Gama de colores para Skins'),
  new Producto(2, 'Remera Ragnarok', 250 , 'Indumentaria de Ragnarok'),
  new Producto(3, 'Class Knigth', 730 , 'Figura de ragnarok'),
  new Producto(4, 'Class Rogue', 180 , 'Figura de ragnarok'),
  new Producto(5, 'Class High Priest', 135 , 'Figura de ragnarok'),
  new Producto(6, 'Class Lord Knigth', 150 , 'Figura de ragnarok'),
  new Producto(7, 'Class Thief', 250 , 'Figura de ragnarok'),
  new Producto(8, 'Class MVP', 150 , 'Figura de ragnarok'),
  new Producto(9, 'Class Stalker', 200 , 'Figura stalker'),
  new Producto(10, 'Pinn Ragnarok', 20 , 'Ping para mochila, etc.'),
];
const productContainer = document.querySelector('#product-container');

productos.forEach(producto => {
  const productDiv = document.createElement('div');
  productDiv.classList.add(`producto`);
  productDiv.style.backgroundColor = '#FF0000';
  //innerHTML
  productDiv.innerHTML = `
    <div class='card'>
      <h3>${producto.id}</h3>
      <h1>${producto.nombre}</h1>
      <p>${producto.precio}</p>
      <p>${producto.description}</p>
      <button class="agregar-carrito"> Agregar al carro</button>
    </div>
  `;

  productContainer.appendChild(productDiv);

  const addButton = productDiv.querySelector('.agregar-carrito');
  addButton.addEventListener('click', () => {
  console.log('Se agrego al carrito', producto);
  });

})
