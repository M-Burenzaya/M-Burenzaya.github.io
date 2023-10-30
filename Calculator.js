let memoryContainer = document.getElementById("memory-container");

for (let i = 0; i < 10; i++) {
  let divElement = document.createElement("div");
  divElement.id = `memory-${i}`;
  divElement.textContent = `Memory ${i+1}`;
  memoryContainer.appendChild(divElement);
}