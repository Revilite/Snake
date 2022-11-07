const board = document.querySelector("#gameBoard");


//Dynamic creation of game board
const makeGrid = (rows, cols) => {
  board.style.setProperty('--grid-rows', rows);
  board.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++){
    let cell = document.createElement("div");
    // cell.innerText = (i + 1);
    board.appendChild(cell).className = "cell";
  }  
}

const hightlight = (e) => {
  e.preventDefault();
  const cell = e.target
  console.log(cell);

  cell.style.setProperty("background-color", "red");

}



makeGrid(20, 20)

board.addEventListener("click", hightlight)

