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
      board.children[activeCell].classList.remove("head")
      activeCell = parseInt((9 * 9) / 2)
      board.children[activeCell].classList.add("head")
      clearInterval(upInterval)
      spawnFood(3);
    }
    else {
      board.children[activeCell].classList.remove("head")

      activeCell -= 9;
      board.children[activeCell].classList.add("head")
      //food detection
      if(board.children[activeCell].classList.value == "cell food head"){
        board.children[activeCell].classList.remove("food");
      }
    }
  }

  // 15 X 15 gameboard
  else if (total == 225) {
    if (activeCell - 15 < 0) {
      board.children[activeCell].classList.remove("head")
      activeCell = parseInt((15 * 15) / 2)
      board.children[activeCell].classList.add("head")
      clearInterval(upInterval)
      spawnFood(3);
    }

    board.children[activeCell].classList.remove("head");
    activeCell -= 15;
    board.children[activeCell].classList.add("head")
  }

  //21 X 21 gameboard


  else if (total == 441) {

    if (activeCell - 21 < 0) {
      board.children[activeCell].classList.remove("head")
      activeCell = parseInt((21 * 21) / 2)
      board.children[activeCell].classList.add("head")
      clearInterval(upInterval)
      spawnFood(3);
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell -= 21;
      board.children[activeCell].classList.add("head")
    }
  }
}



const moveDown = () => {
  if (total == 81) {
    if (activeCell + 9 > total) {
      board.children[activeCell].classList.remove("head")
      activeCell = parseInt((9 * 9) / 2)
      board.children[activeCell].classList.add("head")
      clearInterval(downInterval)
      spawnFood(3);
    }
    else {
      board.children[activeCell].classList.remove("head")

      activeCell += 9;
      board.children[activeCell].classList.add("head")
    };
  }
  else if (total == 225) {
    if (activeCell + 15 > total) {
      board.children[activeCell].classList.remove("head")
      activeCell = parseInt((15 * 15) / 2);
      board.children[activeCell].classList.add("head")
      clearInterval(downInterval)
      spawnFood(3);
    }
    else {
      board.children[activeCell].classList.remove("head");
      activeCell += 15;
      board.children[activeCell].classList.add("head")
    }
  }
  else if (total == 441) {
    if (activeCell + 21 > total) {
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((21 * 21) / 2);
      board.children[activeCell].classList.add("head")
      clearInterval(downInterval)
      spawnFood(3);
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell += 21;
      board.children[activeCell].classList.add("head");
    }
  }
}

const moveLeft = () => {
  if (total == 81) {
    if (activeCell % 9 == 0) {
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((9 * 9) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(leftInterval);
      spawnFood(3);
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell -= 1;
      board.children[activeCell].classList.add("head");
    }
  }
  else if (total == 225) {
    if (activeCell % 15 == 0) {
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((15 * 15) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(leftInterval);
      spawnFood(3);
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell -= 1;
      board.children[activeCell].classList.add("head");
    }
  }

  else if (total == 441) {
    if (activeCell % 21 == 0) {
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((21 * 21) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(leftInterval);
      spawnFood(3);
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell -= 1;
      board.children[activeCell].classList.add("head");
    }
  }
}

const moveRight = () => {
  if (total == 81) {
    if (activeCell % 9 == 8) {
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((9 * 9) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(rightInterval);
      spawnFood(3);
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell += 1;
      board.children[activeCell].classList.add("head");
    }
  }
  else if (total == 225) {
    if (activeCell % 15 == 14) {
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((15 * 15) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(rightInterval);
      spawnFood(3);
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell += 1;
      board.children[activeCell].classList.add("head");
    }
  }
  else if (total == 441){
    if (activeCell % 21 == 20){
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((21 * 21) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(rightInterval);
      spawnFood(3);
    }

    board.children[activeCell].classList.remove("head");
    
    activeCell += 1;
    board.children[activeCell].classList.add("head");
  }
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


