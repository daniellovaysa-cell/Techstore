const form = document.getElementById('form-crear-producto');
const mensaje = document.getElementById('mensaje-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const datos = Object.fromEntries(new FormData(event.target));

  console.log('Producto creado:', {
    nombre: datos.nombre,
    marca: datos.marca,
    precio: Number(datos.precio),
    stock: Number(datos.stock),
    imagen: datos.imagen,
    descripcion: datos.descripcion
  });

  mensaje.textContent = '';
  form.reset();
});

