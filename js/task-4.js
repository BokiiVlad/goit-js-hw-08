const itemForm = document.querySelector(".login-form");
itemForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!itemForm.elements.email.value || !itemForm.elements.password.value) {
        alert('All form fields must be filled in');
        return;
    }
    const formData = {
        [itemForm.elements.email.name]: itemForm.elements.email.value,
        [itemForm.elements.password.name]: itemForm.elements.password.value,
    }
    console.log(formData);
    itemForm.reset();
})
