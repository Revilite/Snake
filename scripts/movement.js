//Board declared in board.js
const all = document.querySelector("body");
let activeCell = document.querySelector(".cell");

let upInterval;
let downInterval;
let leftInterval;
let rightInterval;


const moveUp = () => {
console.log(cell);  
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
  else if (direction == "Enter"){
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


