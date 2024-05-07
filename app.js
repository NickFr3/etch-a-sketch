const container = document.querySelector(".container");

// loop over n times to create the cells (16 fixed cells right now)
for (i = 0; i < 16; i++) {
    const cell = document.createElement("div");

    cell.classList.add("cell", "cell-" + i);

    container.appendChild(cell);
}

let isDrawing = false;

container.addEventListener("mousedown", () => {
    isDrawing = true; 
});

container.addEventListener("mouseup", () => {
    isDrawing = false;
});

// Draw in the grid only when mouseclick is held and mouse is hovering the cells
container.addEventListener("mousemove", (event) => {
    if (isDrawing == true) {
        event.target.style.backgroundColor = 'aqua';
    }
});