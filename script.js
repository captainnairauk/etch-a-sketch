const container = document.getElementById("container");
const resizeButton = document.getElementById("resize-button");

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 640 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.opacity = "0.1";
    container.appendChild(square);
  }

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      const randomColor = getRandomRGB();
      square.style.backgroundColor = randomColor;

      let currentOpacity = parseFloat(square.style.opacity);
      if (currentOpacity < 1) {
        square.style.opacity = (currentOpacity + 0.1).toString();
      }
    });
  });
}

createGrid(16);

resizeButton.addEventListener("click", () => {
  let newSize = prompt("Enter the number of squares per side (maximum 100):");
  newSize = parseInt(newSize);

  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 1 and 100");
  }
});
