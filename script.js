const container = document.getElementById("grid-container");

function random(number) {
    return Math.floor(Math.random() * number + 1);
}

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", function bgChange(){  
            const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
            cell.style.backgroundColor = rndCol;
        });
    };
};
makeRows(16, 16);







