let catalogo = [];

// ── Armar objeto ───────────────────────────────────────────────────
function crearProducto(d) {
  // definimos atributos base que no cambian por subclase de producto
  const base = [d.nombre, d.marca, d.precio, d.stock, d.imagen];
  let producto;
  switch (d.categoria) {
    case 'notebook':
      producto = new Notebook(...base, d.procesador, d.ramGB, d.almacenamientoGB, d.pantallaPulgadas);
      break;
    case 'celular':
      producto = new Celular(...base, d.pantallaPulgadas, d.bateriaMah, d.camaraMp, d.almacenamientoGB);
      break;
    case 'auricular':
      producto = new Auricular(...base, d.tipo, d.wireless, d.cancelacionRuido);
      break;
    case 'monitor':
      producto = new Monitor(...base, d.pulgadas, d.resolucion, d.panelTipo, d.hz);
      break;
    case 'pc_escritorio':
      producto = new PCEscritorio(...base, d.procesador, d.ramGB, d.almacenamientoGB, d.placaVideo, d.fuenteW);
      break;
    default:
      producto = new Producto(...base);
  }
  // aca definimos que tome el id del producto que viene del back
  producto.id = d.id;
  return producto;
}


console.log("catalogo 2", catalogo)

// ── Fetch ─────────────────────────────────────────────────────
// async porque va a ser una funcion asincrona
async function cargarProductos() {
  try {
    // la funcion fetch nos permite realizar peticiones al backend
    // await porque al ser cargarProductos una funcion asincrona, debemos esperar
    // a que la respuesta venga
    const respuesta = await fetch('http://localhost:8080/productos');
    if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);

    // convertimos datos a json para poder utilizarlos
    const datos = await respuesta.json();

    // si hacemos un console.log acá y salió todo bien, vamos a obtener los productos
    // que se encuentran en la base de datos
    console.log(datos)

    // convertimos cada uno de los productos obtenidos del backend 
    // a un objeto de su tipo. ej. si la categoria que viene del back es "notebook",
    // entonces en crearProducto debemos crear la instancia de subclase notebook.
    catalogo = datos.map(d => crearProducto(d));

    renderizar(catalogo)
  } catch (error) {
    console.error('No se pudo cargar:', error.message);

  }
}


cargarProductos()

console.log("catalogo 2", catalogo)

function crearTarjeta(producto) {

  console.log(producto)
  const article = document.createElement('article');
  article.className = 'tarjeta';


  const img = document.createElement('img');
  img.src = producto.imagen;
  img.alt = producto.nombre;
//   img.onerror = () => {
//     img.src = 'img/imagen-no-disponible.png';
//  };

  const h3 = document.createElement('h3');
  h3.textContent = producto.nombre;


  const precio = document.createElement('p');
  precio.className = 'precio';
  precio.textContent = producto.precioFormateado;


  const ficha = document.createElement('p');
  ficha.className = 'ficha';
  ficha.textContent = producto.fichaTecnica();


  const ul = document.createElement('ul');

  const liMarca = document.createElement('li');
  liMarca.textContent = `Marca: ${producto.marca}`;
liMarca.className='marcas'
  const liStock = document.createElement('li');

  liStock.textContent = producto.estaDisponible
    ? `Stock: ${producto.stock} unidades`
    : 'Sin stock';
  liStock.className='cantidad'
  ul.appendChild(liMarca);
  ul.appendChild(liStock);


  const btn = document.createElement('button');

  btn.textContent = producto.estaDisponible
    ? 'Agregar al carrito'
    : 'Sin stock';

  btn.disabled = !producto.estaDisponible;

  const btnDetalle = document.createElement('button');
btnDetalle.textContent = 'Detalle';
btnDetalle.classList.add('btn-detalle');

btnDetalle.addEventListener('click', () => {
  window.location.href = `producto.html?id=${producto.id}`;
});


  const info = document.createElement('div');
  info.className = 'tarjeta-info';

  info.appendChild(h3);
  info.appendChild(precio);
  info.appendChild(ficha);
  info.appendChild(ul);
  info.appendChild(btn);
  info.appendChild(btnDetalle);


  article.appendChild(img);
  article.appendChild(info);

  return article;
}


const contenedor = document.getElementById('productos');
function renderizar(lista) {
catalogo.forEach(producto => {
  contenedor.appendChild(crearTarjeta(producto));
});
}