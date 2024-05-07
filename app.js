const container = document.querySelector(".container");

// loop over n times to create the cells (16 fixed cells right now)
for (i = 0; i < 16; i++) {
    const cell = document.createElement("div");

    cell.classList.add("cell", "cell-" + i);

    container.appendChild(cell);

    // Change color of a cell when mouse enter it's space
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = 'aqua';
    });
}