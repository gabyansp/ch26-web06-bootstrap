const startBtn = document.getElementById('start-btn');
const guessNumber = document.getElementById('guess-number');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

let min = 1;
let max = 100;
let guess;

// Algoritmo de búsqueda binaria
function guessNumberBinary() {
  guess = Math.floor((max + min) / 2);
  guessNumber.innerHTML = guess;
}

// Evento para iniciar el juego
startBtn.addEventListener('click', () => {
  startBtn.parentElement.parentElement.classList.add('d-none');
  guessNumber.parentElement.parentElement.classList.remove('d-none');
  guessNumberBinary();
});

// Evento para cuando se confirma que se adivinó el número
yesBtn.addEventListener('click', () => {
  alert(`Tu número es el ${guess}, Excelente!`);
});

// Evento para cuando se confirma que no se adivinó el número
noBtn.addEventListener('click', () => {
  const answer = confirm(' Oh No!, ¿El número es mayor que al que yo dije?');
  if (answer) {
    min = guess + 1;
  } else {
    max = guess - 1;
  }
  guessNumberBinary();
});
