const numberElement = document.querySelector('.number p');
const decreaseButton = document.querySelector('.decrease');
const zeroButton = document.querySelector('.zero');
const increaseButton = document.querySelector('.increase');

let number = 0;

function updateNumber() {
  numberElement.textContent = number;
  if (number % 2 === 0) {
    if (number === 0) {
        numberElement.style.color = '#F0F6F6ff';
    } else {
        numberElement.style.color = '#ce1836';
    }
  } else {
    numberElement.style.color = '#009989';
  }
}

updateNumber();

decreaseButton.addEventListener('click', function() {
  if (number > 0) {
    number--;
    updateNumber();
  } else {
    alert('O número não pode ser negativo!');
  }
});

zeroButton.addEventListener('click', function() {
  number = 0;
  updateNumber();
});

increaseButton.addEventListener('click', function() {
  if (number < 100) {
    number++;
    updateNumber();
  } else {
    alert('Número não pode ser maior que 100!');
  }
});