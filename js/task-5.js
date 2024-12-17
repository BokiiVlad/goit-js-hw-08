function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const itemBody = document.querySelector('body');
const itemButton = document.querySelector('.change-color');
const itemSpan = document.querySelector('.color');

itemButton.addEventListener("click", event => {
  const newColor = getRandomHexColor();
  itemBody.style.backgroundColor = newColor;
  itemSpan.textContent = newColor;
})
