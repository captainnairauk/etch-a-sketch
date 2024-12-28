const container = document.getElementById('container');
for(let i=0; i<256; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = '#4CAF50';
    });
});
