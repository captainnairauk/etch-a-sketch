const container = document.getElementById("container");
const resizeButton = document.getElementById("resize-button");

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 640 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#4CAF50";
    });
  });

}

createGrid(16);

resizeButton.addEventListener('click', () => {
    let newSize = prompt('Enter the number of squares per side (maximum 100):');
    newSize = parseInt(newSize);

    if(newSize && newSize>0 && newSize<=100){
        createGrid(newSize);
    }else{
        alert('Please enter a valid number between 1 and 100');
    }
});


