const container = document.querySelector(".container");

function setDefaultGridSize() {
    let size = 16;

    // loop over n times to create the cells
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const cell = document.createElement("div");

            cell.classList.add("cell", "cell-" + i);

            cell.style.width = (100 / size) + "%";
            cell.style.height = (100 / size) + "%";

            container.appendChild(cell);
        }   
    }
}

// Get size of grid from user if button is clicked, otherwise default to 16
function getGridSize() {
    let size = parseInt(prompt("Please provide a number between 1 and 100"));

    if (size == null || size < 1 || size > 100 || isNaN(size)) {
        alert("Input must be a number between 1 and 100")
    } else {
        // Reset grid by deleting the content inside the container
        container.innerHTML = "";

        // loop over n times to create the cells
        for (i = 0; i < size; i++) {
            for (j = 0; j < size; j++) {
                const cell = document.createElement("div");

                cell.classList.add("cell", "cell-" + i);

                cell.style.width = (100 / size) + "%";
                cell.style.height = (100 / size) + "%";

                container.appendChild(cell);
            }   
        }
    }  
}

// Ensure that default grid will be 16x16 by calling function before button is pressed
window.onload = setDefaultGridSize;

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
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
});