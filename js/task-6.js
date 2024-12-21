function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const itemCreate = document.querySelector("[data-create]");
const itemDestroy = document.querySelector("[data-destroy]");
const itemInput = document.querySelector("#controls input");
const elementArea = document.querySelector("#boxes");

itemCreate.addEventListener("click", event => {
  const trueValue = Number(itemInput.value);
  if (trueValue < 100 && trueValue > 0) {
    createBox(trueValue);
    itemInput.value = "";
  } else { return; };
});

itemDestroy.addEventListener("click", event => {
  elementArea.innerHTML = "";
})

const createBox = amount => {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const boxItem = document.createElement("div");
    boxItem.style.height = `${size}px`;
    boxItem.style.width = `${size}px`;
    boxItem.style.backgroundColor = getRandomHexColor();
    boxItem.classList.add("box-item");
    size += 10;
    elementArea.prepend(boxItem);
  }
}

elementArea.classList.add("box-div");
itemDestroy.classList.add("btn-destroy");
itemCreate.classList.add("btn-create");
