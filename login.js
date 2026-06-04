const form = document.getElementById('form-login');
const mensaje = document.getElementById('mensaje-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const datos = Object.fromEntries(new FormData(event.target));

  console.log('Login:', {
    email: datos.email,
    password: datos.password
  });

  mensaje.textContent = '';
  form.reset();
});
