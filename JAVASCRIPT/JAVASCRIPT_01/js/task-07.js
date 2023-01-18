const rangeNum = document.querySelector("#font-size-control");
const textToManipulate = document.querySelector("#text");
textToManipulate.style.fontSize = rangeNum.value+"px";
console.log(rangeNum.value);
rangeNum.addEventListener("input", () => {
    let valueInPx = rangeNum.value+"px";
    textToManipulate.style.fontSize = valueInPx;
});
