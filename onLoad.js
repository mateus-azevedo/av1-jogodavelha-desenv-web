window.addEventListener("load", checkLabel);
var nomePlayer1 = "";
var nomePlayer2 = "";

function disableInputName(input1, input2) {
  input1.disabled = true;
  input2.disabled = true;
}

function checkLabel() {
  const startButton = document.getElementById("start-button");
  const [player1, player2] = [
    document.getElementById("player1"),
    document.getElementById("player2"),
  ];

  if (player1.value !== "" && player2.value !== "") {
    startButton.disabled = false;
    nomePlayer1 = player1.value;
    nomePlayer2 = player2.value;

    disableInputName(player1, player2);
  } else {
    startButton.disabled = true;
  }
}

function onMouseOverButton() {
  const warningMessage = document.getElementById("tooltiptext");
  const startButton = document.getElementById("start-button");

  if (startButton.disabled) {
    warningMessage.style.visibility = "visible";
  }
}

function onMouseLeaveButton() {
  const warningMessage = document.getElementById("tooltiptext");
  const startButton = document.getElementById("start-button");

  if (startButton.disabled) {
    warningMessage.style.visibility = "hidden";
  }
}
