const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.classList.add("create");
buttonDestroy.classList.add("destroy");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();

  const boxArray = [];

  for (let i = 0; i < amount; i++) {
  const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor(); 
    boxArray.push(box);
  };

  boxes.append(...boxArray);
  
};

function destroyBoxes() {
boxes.innerHTML = "";
};

buttonCreate.addEventListener('click', () => {
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  input.value = "";
});

buttonDestroy.addEventListener('click', destroyBoxes);