const board = document.querySelector("#gameBoard");

//Dynamic creation of game board

const makeGrid = (rows, cols) => {
  board.style.setProperty('--grid-rows', rows);
  board.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.innerText = (i + 1);
    board.appendChild(cell).className = "cell";

    const total = rows * cols;
    const centerFlaot = total / 2;
    const centerInt = parseInt(centerFlaot) + 1;

    if (cell.innerText == centerInt) {
      cell.style.setProperty("background-color", "red");
      cell.style.setProperty("color", "red");
    }

  }
}
const hightlight = (e) => {
  e.preventDefault();
  const cell = e.target
  console.log(cell);
  cell.style.setProperty("background-color", "red");

}

const clearGrid = () => {
  for (let i = 0; i < 999; i++) {
    const cell = document.querySelector(".cell");
    board.removeChild(cell)
  }
}

makeGrid(9, 9)

// board.addEventListener("click", hightlight)

