const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesEl.length);

categoriesEl.forEach(element => {
    const categoryTitleEl = element.firstElementChild.textContent;
    console.log("Category: ", categoryTitleEl);

    const categoryCountEl = element.lastElementChild;
    const categoryNumberEl = categoryCountEl.querySelectorAll("li");
    console.log("Elements: ", categoryNumberEl.length);
})