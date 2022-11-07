const board = document.querySelector("#gameBoard");

const makeGrid = (rows, cols) => {
  board.style.setProperty('--grid-rows', rows);
  board.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++){
    let cell = document.createElement("div");
    board.appendChild(cell).className = "cell";
  }  
}

makeGrid(20, 20)
