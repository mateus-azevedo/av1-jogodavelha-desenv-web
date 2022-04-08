window.addEventListener("load", checkLabel);

function checkLabel() {
  const startButton = document.getElementById("start-button");
  const [player1, player2] = [
    document.getElementById("player1"),
    document.getElementById("player2"),
  ];

  if (player1.value !== "" && player2.value !== "") {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }

  console.log("first console", player1.value);
  console.log("seconde console", player2.value);
}
