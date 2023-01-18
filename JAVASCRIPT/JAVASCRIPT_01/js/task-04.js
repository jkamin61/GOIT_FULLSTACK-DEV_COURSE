const value = document.querySelector("#value");
console.log(value.textContent);
const counter = document.querySelector("#counter");
const decrButton = counter.firstElementChild;
const incrButton = counter.lastElementChild;
console.log(incrButton);
let counterValue = 0;
decrButton.addEventListener("click",() => {
    counterValue -= 1;
    console.log(counterValue);
    value.textContent = counterValue;
});
incrButton.addEventListener("click",() => {
    counterValue += 1;
    console.log(counterValue);
    value.textContent = counterValue;
});

counter.classList.add("counterList")
value.classList.add("result-box");
const resetButton = document.createElement("button");
counter.append(resetButton);
resetButton.insertAdjacentHTML("beforeend", resetButton.type="button");
resetButton.textContent = "RESET";
resetButton.addEventListener("click", () => {
   counterValue = 0;
    value.textContent = counterValue;
});
