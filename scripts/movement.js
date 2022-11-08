//Board declared in board.js
const all = document.querySelector("body");
let tail = [];
let tailLength = 3;
// add tail to array then dynamically change

let upInterval;
let downInterval;
let leftInterval;
let rightInterval;

//Moving the snake up
const moveUp = () => {
  //9 X 9 gameboard
  if (total == 81) {
    if (activeCell - 9 < 0) {
      //side of board detection


      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      console.log(tail.length)
      board.children[activeCell].classList.remove("head")
      activeCell = parseInt((9 * 9) / 2)
      board.children[activeCell].classList.add("head")
      clearInterval(upInterval)
      spawnFood(3);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }
    else {
      //movement


      board.children[activeCell].classList.remove("head")
      activeCell -= 9;
      board.children[activeCell].classList.add("head")


      tail.push(activeCell + 9);

      for (let i = 0; i < tail.length; i++) {
        board.children[tail[i]].classList.add("tail")
        if (tail.length >= tailLength) {
          let tailEnd = tail.shift();
          board.children[tailEnd].classList.remove("tail")
        }
      }


      //food detection
      if (board.children[activeCell].classList.value == "cell food head") {
        board.children[activeCell].classList.remove("food");
        eatenFood();
      }
    }
  }

  // 15 X 15 gameboard
  else if (total == 225) {
    if (activeCell - 15 < 0) {

      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      
      board.children[activeCell].classList.remove("head")
      activeCell = parseInt((15 * 15) / 2)
      board.children[activeCell].classList.add("head")
      clearInterval(upInterval)
      spawnFood(5);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }

    board.children[activeCell].classList.remove("head");
    activeCell -= 15;
    board.children[activeCell].classList.add("head")

    if (board.children[activeCell].classList.value == "cell food head") {
      board.children[activeCell].classList.remove("food");
      eatenFood();
    }

    tail.push(activeCell + 15);

    for (let i = 0; i < tail.length; i++) {
      board.children[tail[i]].classList.add("tail")
      if (tail.length >= tailLength) {
        let tailEnd = tail.shift();
        board.children[tailEnd].classList.remove("tail")
      }
    }

  }

  //21 X 21 gameboard


  else if (total == 441) {

    if (activeCell - 21 < 0) {

      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      board.children[activeCell].classList.remove("head")
      activeCell = parseInt((21 * 21) / 2)
      board.children[activeCell].classList.add("head")
      clearInterval(upInterval)
      spawnFood(7);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell -= 21;
      board.children[activeCell].classList.add("head")

      if (board.children[activeCell].classList.value == "cell food head") {
        board.children[activeCell].classList.remove("food");
        eatenFood();
      }

      tail.push(activeCell + 21);

      for (let i = 0; i < tail.length; i++) {
        board.children[tail[i]].classList.add("tail")
        if (tail.length >= tailLength) {
          let tailEnd = tail.shift();
          board.children[tailEnd].classList.remove("tail")
        }
      }

    }
  }
}



const moveDown = () => {
  if (total == 81) {
    if (activeCell + 9 > total) {

      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      board.children[activeCell].classList.remove("head")
      activeCell = parseInt((9 * 9) / 2)
      board.children[activeCell].classList.add("head")
      clearInterval(downInterval)
      spawnFood(3);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }
    else {
      board.children[activeCell].classList.remove("head")

      activeCell += 9;
      board.children[activeCell].classList.add("head")

      if (board.children[activeCell].classList.value == "cell food head") {
        board.children[activeCell].classList.remove("food");
        eatenFood();
      }

      tail.push(activeCell - 9);

      for (let i = 0; i < tail.length; i++) {
        board.children[tail[i]].classList.add("tail")
        if (tail.length >= tailLength) {
          let tailEnd = tail.shift();
          board.children[tailEnd].classList.remove("tail")
        }
      }

    };
  }
  else if (total == 225) {
    if (activeCell + 15 > total) {
      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      board.children[activeCell].classList.remove("head")
      activeCell = parseInt((15 * 15) / 2);
      board.children[activeCell].classList.add("head")
      clearInterval(downInterval)
      spawnFood(5);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }
    else {
      board.children[activeCell].classList.remove("head");
      activeCell += 15;
      board.children[activeCell].classList.add("head")

      if (board.children[activeCell].classList.value == "cell food head") {
        board.children[activeCell].classList.remove("food");
        eatenFood();
      }

      tail.push(activeCell - 15);

      for (let i = 0; i < tail.length; i++) {
        board.children[tail[i]].classList.add("tail")
        if (tail.length >= tailLength) {
          let tailEnd = tail.shift();
          board.children[tailEnd].classList.remove("tail")
        }
      }
    }

  }
  else if (total == 441) {
    if (activeCell + 21 > total) {
      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((21 * 21) / 2);
      board.children[activeCell].classList.add("head")
      clearInterval(downInterval)
      spawnFood(7);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell += 21;
      board.children[activeCell].classList.add("head");

      if (board.children[activeCell].classList.value == "cell food head") {
        board.children[activeCell].classList.remove("food");
        eatenFood();
      }

      tail.push(activeCell - 21);

      for (let i = 0; i < tail.length; i++) {
        board.children[tail[i]].classList.add("tail")
        if (tail.length >= tailLength) {
          let tailEnd = tail.shift();
          board.children[tailEnd].classList.remove("tail")
        }
      }
    }
  }
}

const moveLeft = () => {
  if (total == 81) {
    if (activeCell % 9 == 0) {
      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((9 * 9) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(leftInterval);
      spawnFood(3);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell -= 1;
      board.children[activeCell].classList.add("head");

      if (board.children[activeCell].classList.value == "cell food head") {
        board.children[activeCell].classList.remove("food");
        eatenFood();
      }

      tail.push(activeCell + 1);

      for (let i = 0; i < tail.length; i++) {
        board.children[tail[i]].classList.add("tail")
        if (tail.length >= tailLength) {
          let tailEnd = tail.shift();
          board.children[tailEnd].classList.remove("tail")
        }
      }
    }
  }
  else if (total == 225) {
    if (activeCell % 15 == 0) {
      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((15 * 15) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(leftInterval);
      spawnFood(5);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell -= 1;
      board.children[activeCell].classList.add("head");

      if (board.children[activeCell].classList.value == "cell food head") {
        board.children[activeCell].classList.remove("food");
        eatenFood();
      }
    }

    tail.push(activeCell + 1);

    for (let i = 0; i < tail.length; i++) {
      board.children[tail[i]].classList.add("tail")
      if (tail.length >= tailLength) {
        let tailEnd = tail.shift();
        board.children[tailEnd].classList.remove("tail")
      }
    };

  }

  else if (total == 441) {
    if (activeCell % 21 == 0) {
      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((21 * 21) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(leftInterval);
      spawnFood(7);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell -= 1;
      board.children[activeCell].classList.add("head");

      if (board.children[activeCell].classList.value == "cell food head") {
        board.children[activeCell].classList.remove("food");
        eatenFood();
      }
    }
    tail.push(activeCell + 1);

    for (let i = 0; i < tail.length; i++) {
      board.children[tail[i]].classList.add("tail")
      if (tail.length >= tailLength) {
        let tailEnd = tail.shift();
        board.children[tailEnd].classList.remove("tail")
      }
    };

  }
}

const moveRight = () => {
  if (total == 81) {
    if (activeCell % 9 == 8) {
      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((9 * 9) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(rightInterval);
      spawnFood(3);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell += 1;
      board.children[activeCell].classList.add("head");

      if (board.children[activeCell].classList.value == "cell food head") {
        board.children[activeCell].classList.remove("food");
        eatenFood();
      }

      tail.push(activeCell - 1);

      for (let i = 0; i < tail.length; i++) {
        board.children[tail[i]].classList.add("tail")
        if (tail.length >= tailLength) {
          let tailEnd = tail.shift();
          board.children[tailEnd].classList.remove("tail")
        }
      };

    }
  }
  else if (total == 225) {
    if (activeCell % 15 == 14) {
      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((15 * 15) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(rightInterval);
      spawnFood(5);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }
    else {
      board.children[activeCell].classList.remove("head");

      activeCell += 1;
      board.children[activeCell].classList.add("head");

      if (board.children[activeCell].classList.value == "cell food head") {
        board.children[activeCell].classList.remove("food");
        eatenFood();
      }

      tail.push(activeCell - 1);

      for (let i = 0; i < tail.length; i++) {
        board.children[tail[i]].classList.add("tail")
        if (tail.length >= tailLength) {
          let tailEnd = tail.shift();
          board.children[tailEnd].classList.remove("tail")
        }
      };

    }
  }
  else if (total == 441) {
    if (activeCell % 21 == 20) {
      for (let i = 0; i < total; i++) {
        board.children[i].classList.remove("tail")
      }
      for (let i = 0; i <= tailLength; i++) {
        tail.pop();
      }
      tailLength = 3;
      board.children[activeCell].classList.remove("head");
      activeCell = parseInt((21 * 21) / 2);
      board.children[activeCell].classList.add("head");
      clearInterval(rightInterval);
      spawnFood(7);
      score = 0;
      scoreBoard.innerText = `HighScore: ${localStorage.getItem("highScore")}  Score: ${score}`
    }

    board.children[activeCell].classList.remove("head");

    activeCell += 1;
    board.children[activeCell].classList.add("head");

    if (board.children[activeCell].classList.value == "cell food head") {
      board.children[activeCell].classList.remove("food");
      eatenFood();
    }

    tail.push(activeCell - 1);

    for (let i = 0; i < tail.length; i++) {
      board.children[tail[i]].classList.add("tail")
      if (tail.length >= tailLength) {
        let tailEnd = tail.shift();
        board.children[tailEnd].classList.remove("tail")
      }
    };

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


