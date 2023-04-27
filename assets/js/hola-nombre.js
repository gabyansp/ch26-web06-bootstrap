const boton = document.getElementById('boton');
const saludo = document.getElementById('saludo');

boton.addEventListener('click', () => {
  const nombre = prompt('¿Cuál es tu nombre?');
  saludo.textContent = `Hola ${nombre}`;
});

