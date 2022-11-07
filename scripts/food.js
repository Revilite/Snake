const placements = [];

const spawnFood = (num) => {
  // clears 
  for(let i = 0; i < total; i++){
    board.children[i].classList.remove("food");
    placements.pop();
  }

  for (let i = 0; i < num; i++){
    let randomPlacement = Math.floor(Math.random() * total);
      if(activeCell == randomPlacement ){
        randomPlacement = Math.floor(Math.random() * total);
      }
      placements.push(randomPlacement);
  }


  for (let i = 0; i < placements.length; i++){
    for(let j = 0; j < board.children.length; j++){
      if(JSON.stringify(placements[i]) == board.children[j].innerText){
        board.children[placements[i]].classList.add("food")
      }
    }
  }
}

spawnFood(3);