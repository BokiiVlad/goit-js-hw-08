const findInput = document.querySelector("#name-input");
const findSpan = document.querySelector("#name-output");
findInput.addEventListener("input", event => {
    const correctName = findInput.value.trim();
    if (correctName) {
        findSpan.textContent = correctName;
    } else { findSpan.textContent = "Anonymous" }
});
