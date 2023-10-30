let memoryContainer = document.getElementById("memory-container");
let array = [];
for (let i = 0; i < 10; i++) {
  let divElement = document.createElement("div");
  divElement.id = `memory-${i}`;
  divElement.textContent = `Memory ${array[i]}`;
  memoryContainer.appendChild(divElement);
}
let i = 0;
function Evaluate(args){
    const value = eval(args);
    array.push(value);
    let myElement = document.getElementById(`memory-${i}`);
    myElement.textContent = "Memory " +array[i];
    i++;
    return value;
}