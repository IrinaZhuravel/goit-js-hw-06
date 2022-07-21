const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesEl.length);

categoriesEl.forEach(element => {
    const categoryTitleEl = element.firstElementChild.textContent;
    console.log("Category: ", categoryTitleEl);

    const categoryCountEl = element.lastElementChild;
    console.log("Elements: ", categoryCountEl.length);
})