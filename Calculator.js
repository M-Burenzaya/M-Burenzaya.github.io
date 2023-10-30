let memoryContainer = document.getElementById("memory-container");
let array = [0];
for (let i = 0; i < 10; i++) {
  let divElement = document.createElement("div");
  divElement.id = `memory-${i}`;
  divElement.textContent = `Memory ${array[i]}`;
  memoryContainer.appendChild(divElement);
}

function Evaluate(args){
    const value = eval(args);
    return value;
}