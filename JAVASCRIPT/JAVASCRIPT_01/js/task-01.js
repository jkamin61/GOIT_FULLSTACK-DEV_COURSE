
const mainList = document.querySelector("#categories");
const listItems = mainList.children;
console.log("Number of categories: "+listItems.length);
console.log("\n");
const myItems = document.querySelectorAll(".item");
for (let i = 0; i < myItems.length; i++) {
    console.log("Category: "+myItems[i].firstElementChild.textContent);
    console.log("Elements: "+myItems[i].querySelectorAll("li").length);
}