const itemCategories = document.querySelectorAll("#categories .item");

console.log(`Number of categories ${itemCategories.length}`);
itemCategories.forEach(item => {
    const nameCategory = item.querySelector("h2").textContent;
    console.log(`Category: ${nameCategory}`);
    const numberElements = item.querySelectorAll("ul li");
    console.log(`Elements: ${numberElements.length}`);
})