window.addEventListener("load", checkForm);

function checkForm() {
  const playerInput1 = document.getElementById("player1");
  const playerInput2 = document.getElementById("player2");
  const startButton = document.getElementById("start-button");

  if (playerInput1.value === "" || playerInput2.value === "") {
    startButton.disabled = true;
    hideAllGameMove();
  }
}

function hideAllGameMove() {
  const gameBoardMove = document.getElementsByClassName("game-board-move");
  // console.log(gameBoardMove);

  for (let item of gameBoardMove) {
    item.innerText = "";
  }
}
