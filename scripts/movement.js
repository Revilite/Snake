// const board = document.querySelector("#gameBoard");

const all = document.querySelector("body");

let upInterval;
let downInterval;
let leftInterval;
let rightInterval;

const moveUp = () => {
  console.log("up");
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
    clearInterval(upInterval, downInterval, leftInterval, rightInterval)
  }

}

all.addEventListener("keydown", (e) => {
  movement(e.key)
})


