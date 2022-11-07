//Board declared in board.js
const all = document.querySelector("body");

let upInterval;
let downInterval;
let leftInterval;
let rightInterval;

//Moving the snake up
const moveUp = () => {
  clearInterval(downInterval)
  clearInterval(leftInterval)
  clearInterval(rightInterval)
  //9 X 9 gameboard
  if (total == 81) {
    if (activeCell - 9 < 0) {
      board.children[activeCell].setAttribute("style", "background-color: #343536; color: #343536")
      activeCell = parseInt((9 * 9) / 2)
      board.children[activeCell].setAttribute("style", "background-color: red; color: red")
      clearInterval(upInterval)
    }
    else {
      board.children[activeCell].setAttribute("style", "background-color: #343536; color: #343536")

      activeCell -= 9;
      board.children[activeCell].setAttribute("style", "background-color: red; color: red")
    }
  }

  // 15 X 15 gameboard
  else if (total == 225) {
    if (activeCell - 15 < 0) {
      board.children[activeCell].setAttribute("style", "background-color: #343536; color: #343536")
      activeCell = parseInt((15 * 15) / 2)
      board.children[activeCell].setAttribute("style", "background-color: red; color: red")
      clearInterval(upInterval)
    }

    board.children[activeCell].setAttribute("style", "background-color: #343536; color: #343536");
    activeCell -= 15;
    board.children[activeCell].setAttribute("style", "background-color: red; color: red")
  }

  //21 X 21 gameboard


  else if (total == 441) {

    if (activeCell - 21 < 0) {
      board.children[activeCell].setAttribute("style", "background-color: #343536; color: #343536")
      activeCell = parseInt((21 * 21) / 2)
      board.children[activeCell].setAttribute("style", "background-color: red; color: red")
      clearInterval(upInterval)
    }
    board.children[activeCell].setAttribute("style", "background-color: #343536; color: #343536");

    activeCell -= 21;
    board.children[activeCell].setAttribute("style", "background-color: red; color: red")
  }
}



const moveDown = () => {
  console.log("down");
}

const moveLeft = () => {
  console.log("left");
}

const moveRight = () => {
  console.log("right");
}


const movement = (direction) => {

  if (direction == "ArrowUp" || direction == "w") {
    upInterval = setInterval(moveUp, 300)
  }
  else if (direction == "ArrowDown" || direction == "s") {
    downInterval = setInterval(moveDown, 300)
  }
  else if (direction == "ArrowLeft" || direction == "a") {
    leftInterval = setInterval(moveLeft, 300)
  }
  else if (direction == "ArrowRight" || direction == "d") {
    rightInterval = setInterval(moveRight, 300)
  }
  else if (direction == "Enter") {
    clearInterval(upInterval);
    clearInterval(downInterval);
    clearInterval(leftInterval);
    clearInterval(rightInterval);

    console.log(direction);

  }

}

all.addEventListener("keydown", (e) => {
  movement(e.key)
})


