//Board declared in board.js
const all = document.querySelector("body");

let upInterval;
let downInterval;
let leftInterval;
let rightInterval;


const moveUp = () => {

  if (total == 81) {
    
    if (activeCell - 9 < 0){
      board.children[activeCell].setAttribute("style", "background-color: #343536; color: #343536")
      activeCell = 40
      board.children[activeCell].setAttribute("style", "background-color: red; color: red")
      clearInterval(upInterval)
    }
    else{
    board.children[activeCell].setAttribute("style", "background-color: #343536; color: #343536")

    activeCell -= 9;
    board.children[activeCell].setAttribute("style", "background-color: red; color: red")
    }
  }
  else if (total == 225) {
    board.children[activeCell].setAttribute("style", "background-color: #343536; color: #343536");

    activeCell -= 15;
    board.children[activeCell].setAttribute("style", "background-color: red; color: red")
  }
  else if (total == 441) {
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


