function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amountOfBoxes = parseInt(input.value);

  if (amountOfBoxes >= 1 && amountOfBoxes <= 100) {
    const fragment = document.createDocumentFragment(); // Створюємо фрагмент документа

    for (let i = 0; i < amountOfBoxes; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box); // Додаємо елемент до фрагмента
    }

    boxesContainer.appendChild(fragment); // Додаємо всі елементи до DOM
    input.value = '';
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}