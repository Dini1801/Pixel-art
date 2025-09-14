const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");

// Create a 16x16 grid
for (let i = 0; i < 256; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  // Paint the cell when clicked
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = colorPicker.value;
  });

  grid.appendChild(cell);
}

// Clear grid function
function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => (cell.style.backgroundColor = "white"));
}
