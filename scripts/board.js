const board = document.querySelector("#gameBoard");
const scoreBoard = document.querySelector("#scoreBoard")
let activeCell = parseInt((9 * 9) / 2);
let total;
let score = 0;

//Dynamic creation of game board

const makeGrid = (rows, cols) => {
  // board.appendChild(document.createElement("div"));
  clearGrid();
  scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore") || 0}  Score: ${score}`
  board.style.setProperty('--grid-rows', rows);
  board.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.innerText = (i + 1);
    board.appendChild(cell).className = "cell";

    const centerFlaot = total / 2;
    const centerInt = parseInt(centerFlaot) + 1;

    if (cell.innerText == centerInt) {
      cell.classList.add("head")
    }
    total = rows * cols;
  }
}
const hightlight = (e) => {
  e.preventDefault();
  const cell = e.target
  console.log(cell);
  cell.style.setProperty("background-color", "red");

}

const clearGrid = () => {
  const cell = document.querySelectorAll(".cell");
  for (let i = 0; i < total; i++) {
    console.log(i)
    console.log(cell[i]);
    board.removeChild(cell[i])
  }
}

const clearLines = () => {
  const cell = document.querySelectorAll(".cell");
  const lines = localStorage.getItem("lines");
  console.log(typeof lines)
  if (lines == "true") {
    for (let i = 0; i < total; i++) {
      cell[i].style.setProperty("border", "none")
    }
    localStorage.setItem("lines", false);
  }
  else {
    for (let i = 0; i < total; i++) {
      cell[i].style.border = "1px solid black";
    }
    localStorage.setItem("lines", true);
  }
}

document.querySelector("#buttons").addEventListener("click", (e) => {
  if (e.target == "grid9") {
    activeCell = parseInt((9 * 9) / 2);
  }
  else if (e.target.id == "grid15") {
    activeCell = parseInt((15 * 15) / 2);
  }
  else if (e.target.id == "grid21") {
    activeCell = parseInt((21 * 21) / 2);
  }
})
makeGrid(9, 9)
// board.addEventListener("click", hightlight)

