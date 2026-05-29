class Producto {
  #precio;
  #stock;

  constructor(nombre, marca, precio, stock, imagen) {
    this.nombre = nombre;
    this.marca = marca;
    this.#precio = precio;
    this.#stock = stock;
    this.imagen = imagen;
  }

  descripcion() {
    return `${this.nombre} — ${this.marca}`;
  }


  get precio() {
    return this.#precio;
  }

  set precio(nuevoPrecio) {
    if (nuevoPrecio < 0) {
      console.error('El precio no puede ser negativo.');
      return;
    }

    this.#precio = nuevoPrecio;
  }

  get stock() {
    return this.#stock;
  }

  set stock(nuevoStock) {
    if (nuevoStock < 0) {
      console.error('El stock no puede ser negativo.');
      return;
    }

    this.#stock = nuevoStock;
  }

  get estaDisponible() {
    return this.#stock > 0;
  }

  get precioFormateado() {
    return `$${this.#precio.toLocaleString('es-AR')}`;
  }

  resumen() {
    const disponible = this.estaDisponible
      ? `${this.#stock} en stock`
      : 'Sin stock';

    return `${this.descripcion()} | ${this.precioFormateado} | ${disponible}`;
  }

  fichatecnica() {
    return `Nombre: ${this.nombre}, Marca: ${this.marca}`;
  }
}


class Notebook extends Producto {
  constructor(
    nombre,
    marca,
    precio,
    stock,
    imagen,
    procesador,
    ramGB,
    almacenamientoGB
  ) {
    super(nombre, marca, precio, stock, imagen);

    this.procesador = procesador;
    this.ramGB = ramGB;
    this.almacenamientoGB = almacenamientoGB;
  }

  fichatecnica() {
    return `
      Procesador: ${this.procesador} |
      RAM: ${this.ramGB}GB |
      SSD: ${this.almacenamientoGB}GB
    `;
  }
}

class Celular extends Producto {
  constructor(
    nombre,
    marca,
    precio,
    stock,
    imagen,
    pantallaPulgadas,
    bateriaMah,
    camaraMp,
    almacenamientoGB
  ) {
    super(nombre, marca, precio, stock, imagen);

    this.pantallaPulgadas = pantallaPulgadas;
    this.bateriaMah = bateriaMah;
    this.camaraMp = camaraMp;
    this.almacenamientoGB = almacenamientoGB;
  }

  fichatecnica() {
    return `
      Pantalla: ${this.pantallaPulgadas}" |
      Cámara: ${this.camaraMp}MP |
      Almacenamiento: ${this.almacenamientoGB}GB
    `;
  }
}

class Auricular extends Producto {
  constructor(
    nombre,
    marca,
    precio,
    stock,
    imagen,
    tipo,
    wireless,
    cancelacionRuido
  ) {
    super(nombre, marca, precio, stock, imagen);

    this.tipo = tipo;
    this.wireless = wireless;
    this.cancelacionRuido = cancelacionRuido;
  }

  fichatecnica() {
    return `
      Tipo: ${this.tipo} |
      Wireless: ${this.wireless ? 'Sí' : 'No'} |
      Cancelación de ruido: ${this.cancelacionRuido ? 'Sí' : 'No'}
    `;
  }
}

class Monitor extends Producto {
  constructor(
    nombre,
    marca,
    precio,
    stock,
    imagen,
    pulgadas,
    resolucion,
    panelTipo,
    hz
  ) {
    super(nombre, marca, precio, stock, imagen);

    this.pulgadas = pulgadas;
    this.resolucion = resolucion;
    this.panelTipo = panelTipo;
    this.hz = hz;
  }

  fichatecnica() {
    return `
      ${this.pulgadas}" |
      ${this.resolucion} |
      ${this.hz}Hz
    `;
  }
}

class PCEscritorio extends Producto {
  constructor(
    nombre,
    marca,
    precio,
    stock,
    imagen,
    procesador,
    ramGB,
    almacenamientoGB,
    placaVideo,
    fuenteW
  ) {
    super(nombre, marca, precio, stock, imagen);

    this.procesador = procesador;
    this.ramGB = ramGB;
    this.almacenamientoGB = almacenamientoGB;
    this.placaVideo = placaVideo;
    this.fuenteW = fuenteW;
  }

  fichatecnica() {
    return `
      CPU: ${this.procesador} |
      RAM: ${this.ramGB}GB |
      GPU: ${this.placaVideo}
    `;
  }
}


const catalogo = [
  new Notebook(
    'MacBook Air M2',
    'Apple',
    2100000,
    4,
    'https://techcrunch.com/wp-content/uploads/2022/07/CMC_1580.jpg?w=1024',
    'Apple M2',
    8,
    256
  ),

  new Celular(
    'iPhone 15',
    'Apple',
    1650000,
    12,
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
    6.1,
    4200,
    48,
    256
  ),

  new Auricular(
    'Sony WH-1000XM5',
    'Sony',
    420000,
    0,
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
    'Over Ear',
    true,
    true
  ),

  new Monitor(
    'LG UltraGear 27GP850',
    'LG',
    480000,
    6,
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    27,
    '2560x1440',
    'IPS',
    165
  ),

  new PCEscritorio(
    'PC Gamer Entry',
    'Armada',
    1200000,
    5,
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400',
    'Ryzen 5 5600',
    16,
    1000,
    'RTX 4060',
    650
  ),

  new Notebook(
  'Lenovo IdeaPad 3',
  'Lenovo',
  850000,
  7,
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
  'Ryzen 5 5500U',
  8,
  512
),

new Celular(
  'Samsung Galaxy S24',
  'Samsung',
  1450000,
  10,
  'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
  6.2,
  4000,
  50,
  256
),

new Auricular(
  'JBL Tune 720BT',
  'JBL',
  160000,
  15,
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  'Over Ear',
  true,
  false
),

new Monitor(
  'Samsung Odyssey G5',
  'Samsung',
  520000,
  4,
  'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400',
  27,
  '2560x1440',
  'VA',
  144
)
];


function crearTarjeta(producto) {


  const article = document.createElement('article');
  article.className = 'tarjeta';


  const img = document.createElement('img');
  img.src = producto.imagen;
  img.alt = producto.nombre;


  const h3 = document.createElement('h3');
  h3.textContent = producto.nombre;


  const precio = document.createElement('p');
  precio.className = 'precio';
  precio.textContent = producto.precioFormateado;


  const ficha = document.createElement('p');
  ficha.className = 'ficha';
  ficha.textContent = producto.fichatecnica();


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


  const info = document.createElement('div');
  info.className = 'tarjeta-info';

  info.appendChild(h3);
  info.appendChild(precio);
  info.appendChild(ficha);
  info.appendChild(ul);
  info.appendChild(btn);


  article.appendChild(img);
  article.appendChild(info);

  return article;
}


const contenedor = document.getElementById('productos');

catalogo.forEach(producto => {
  contenedor.appendChild(crearTarjeta(producto));
});

