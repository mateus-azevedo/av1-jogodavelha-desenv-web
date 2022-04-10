window.addEventListener("load", checkLabel);
var nomePlayer1 = "";
var nomePlayer2 = "";

function checkLabel() {
  const startButton = document.getElementById("start-button");
  startButton.textContent = BUTTON_MESSAGES.START;
  const [player1, player2] = [
    document.getElementById("player1"),
    document.getElementById("player2"),
  ];

  if (player1.value !== "" && player2.value !== "") {
    startButton.disabled = false;
    nomePlayer1 = player1.value;
    nomePlayer2 = player2.value;

    return true;
  } else {
    startButton.disabled = true;

    return false;
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
