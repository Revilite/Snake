//Board declared in board.js
const all = document.querySelector("body");

let upInterval;
let downInterval;
let leftInterval;
let rightInterval;

//Moving the snake up
const moveUp = () => {
  //9 X 9 gameboard
  if (total == 81) {
    if (activeCell - 9 < 0) {
      board.children[activeCell].classList.remove("active")
      activeCell = parseInt((9 * 9) / 2)
      board.children[activeCell].classList.add("active")
      clearInterval(upInterval)
    }
    else {
      board.children[activeCell].classList.remove("active")

      activeCell -= 9;
      board.children[activeCell].classList.add("active")
    }
  }

  // 15 X 15 gameboard
  else if (total == 225) {
    if (activeCell - 15 < 0) {
      board.children[activeCell].classList.remove("active")
      activeCell = parseInt((15 * 15) / 2)
      board.children[activeCell].classList.add("active")
      clearInterval(upInterval)
    }

    board.children[activeCell].classList.remove("active");
    activeCell -= 15;
    board.children[activeCell].classList.add("active")
  }

  //21 X 21 gameboard


  else if (total == 441) {

    if (activeCell - 21 < 0) {
      board.children[activeCell].classList.remove("active")
      activeCell = parseInt((21 * 21) / 2)
      board.children[activeCell].classList.add("active")
      clearInterval(upInterval)
    }
    else{
    board.children[activeCell].classList.remove("active");

    activeCell -= 21;
    board.children[activeCell].classList.add("active")
    }
  }
}



const moveDown = () => {
  clearInterval(upInterval)
  clearInterval(leftInterval)
  clearInterval(rightInterval)
  if (total == 81) {
    if (activeCell + 9 > total) {
      board.children[activeCell].classList.remove("active")
      activeCell = parseInt((9 * 9) / 2)
      board.children[activeCell].classList.add("active")
      clearInterval(downInterval)
    }
    else {
      board.children[activeCell].classList.remove("active")

      activeCell += 9;
      board.children[activeCell].classList.add("active")
    };
  }
  else if (total == 225) {
    if (activeCell + 15 > total) {
      board.children[activeCell].classList.remove("active")
      activeCell = parseInt((15 * 15) / 2);
      board.children[activeCell].classList.add("active")
      clearInterval(downInterval)
    }
    else {
      board.children[activeCell].classList.remove("active");
      activeCell += 15;
      board.children[activeCell].classList.add("active")
    }
  }
  else if (total == 441){
    if (activeCell + 21 > total){
      board.children[activeCell].classList.remove("active");
      activeCell = parseInt((21 * 21) / 2);
      board.children[activeCell].classList.add("active")
      clearInterval(downInterval)
    }
    else{
      board.children[activeCell].classList.remove("active");

      activeCell += 21;
      board.children[activeCell].classList.add("active");
    }
  }
}

const moveLeft = () => {
  console.log("left");
}

const moveRight = () => {
  console.log("right");
}


const movement = (direction) => {
  clearInterval(upInterval);
  clearInterval(downInterval);
  clearInterval(leftInterval);
  clearInterval(rightInterval);

  if (direction == "ArrowUp" || direction == "w") {

    upInterval = setInterval(moveUp, 150)
  }
  else if (direction == "ArrowDown" || direction == "s") {
    downInterval = setInterval(moveDown, 150)
  }
  else if (direction == "ArrowLeft" || direction == "a") {
    leftInterval = setInterval(moveLeft, 150)
  }
  else if (direction == "ArrowRight" || direction == "d") {
    rightInterval = setInterval(moveRight, 150)
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


