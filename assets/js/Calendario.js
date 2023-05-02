const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);
  const date = new Date(`${month}/${day}/${year}`);
  const weekday = date.toLocaleDateString('es-ES', { weekday: 'long' });
  let message;
  switch (weekday) {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'jueves':
    case 'viernes':
      message = `El ${weekday} ${day}/${month}/${year} es un día laborable.`;
      break;
    case 'sábado':
    case 'domingo':
      message = `El ${weekday} ${day}/${month}/${year} es un fin de semana.`;
      break;
  }
  result.innerHTML = message;
});
