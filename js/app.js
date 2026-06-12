// aca se van a cargar los datos que vengan del back

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

  fichaTecnica() {
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

  fichaTecnica() {
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

  fichaTecnica() {
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

  fichaTecnica() {
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

  fichaTecnica() {
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

  fichaTecnica() {
    return `
      CPU: ${this.procesador} |
      RAM: ${this.ramGB}GB |
      GPU: ${this.placaVideo}
    `;
  }
}
