const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];
let myList = document.querySelector("ul#ingredients");
let listed = [];
for (const element of ingredients) {
listed = document.createElement("li");
listed.textContent = element;
listed.classList.add(".item");
myList.append(listed);
}
