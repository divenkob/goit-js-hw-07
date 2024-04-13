const list = document.querySelector("#categories");
const categories = list.querySelectorAll("li.item");
console.log(`Number of categories ${categories.length}`);

categories.forEach((item) => {
const categoriesNames = item.querySelector("h2").textContent;
const categoriesCountOfItems = item.querySelectorAll(" ul > li");
console.log(`Categories: ${categoriesNames}`);
console.log(`Elements: ${categoriesCountOfItems.length}`);
});

