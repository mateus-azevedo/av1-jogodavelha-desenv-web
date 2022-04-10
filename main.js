/*
PONTOS DA AV1:    
    JOGO SÓ PODE COMEÇAR QUANDO O NOME DE AMBOS JOGADORES FOREM INFORMADOS
    O BOTAO PARA JOGAR AO ESTAR INATIVADO DEVE APRESENTAR OUTRA ESTILIZAÇÃO
    APOS INICIAR AS PARTIDAS DO MELHOR DE TRES, OS NOMES NAO PODEM SER ALTERADOS

    
    O MELHOR DE TRES CONSISTE EM 3 VITORIAS DE UM MESMO JOGADOR
    DEVE SER IMPLEMENTADO UM MECANISMO PARA RESETAR O JOGO AO FINAL DO MELHOR DE TRES
    AS CORES DO (X) E (O) DEVEM SER DIFERENTES
    AO FINAL DO MELHOR DE TRES O VENCEDOR DEVERÁ TER O NOME APRESENTADO NO LUGAR DO JOGO DA VELHA
    DEVERÁ SER ATUALIZADO O HISTÓRICO DAS PARTIDAS 
*/
const LIMIT_OF_TURN = 10;
let isNotHaveAWinner = true;
let counterTurn = 0;

const [player1, player2] = [
  document.getElementById("player1"),
  document.getElementById("player2"),
];

function disableInputName(input1, input2) {
  input1.disabled = true;
  input2.disabled = true;
}

function hideAllGameMove() {
  const gameBoardMove = document.getElementsByClassName("game-board-move");
  const startButton = document.getElementById("start-button");
  // startButton.style.display = "none";

  for (let item of gameBoardMove) {
    item.innerText = "";
  }
}

function start() {
  isNotHaveAWinner = true;
  counterTurn = 0;
  disableInputName(player1, player2);
  hideAllGameMove();
}

/**
 *  IMPLEMENTAÇÃO PARA MARCAR NO TABULEIRO O JOGADOR ATUAL
 *  IREI PEGAR TODOS ELEMENTOS POR ID
 */

const row1Column1 = document.getElementById("row1-column1");
const row1Column2 = document.getElementById("row1-column2");
const row1Column3 = document.getElementById("row1-column3");
const row2Column1 = document.getElementById("row2-column1");
const row2Column2 = document.getElementById("row2-column2");
const row2Column3 = document.getElementById("row2-column3");
const row3Column1 = document.getElementById("row3-column1");
const row3Column2 = document.getElementById("row3-column2");
const row3Column3 = document.getElementById("row3-column3");

row1Column1.addEventListener("click", r1c1, true);
row1Column2.addEventListener("click", r1c2, true);
row1Column3.addEventListener("click", r1c3, true);
row2Column1.addEventListener("click", r2c1, true);
row2Column2.addEventListener("click", r2c2, true);
row2Column3.addEventListener("click", r2c3, true);
row3Column1.addEventListener("click", r3c1, true);
row3Column2.addEventListener("click", r3c2, true);
row3Column3.addEventListener("click", r3c3, true);

let isPlayer1Turn;

function swapTurn() {
  isPlayer1Turn = !isPlayer1Turn;
  counterTurn++;

  return isPlayer1Turn;
}

function r1c1() {
  const item = document.getElementById("row1-column1");

  if (item.innerHTML === "" && isNotHaveAWinner) {
    if (swapTurn()) {
      item.innerHTML = "X";
      item.style.color = "red";
    } else {
      item.innerHTML = "O";
      item.style.color = "blue";
    }
  }

  lookForAWinner();
}

function r1c2() {
  const item = document.getElementById("row1-column2");

  if (item.innerHTML === "" && isNotHaveAWinner) {
    if (swapTurn()) {
      item.innerHTML = "X";
      item.style.color = "red";
    } else {
      item.innerHTML = "O";
      item.style.color = "blue";
    }
  }

  lookForAWinner();
}

function r1c3() {
  const item = document.getElementById("row1-column3");

  if (item.innerHTML === "" && isNotHaveAWinner) {
    if (swapTurn()) {
      item.innerHTML = "X";
      item.style.color = "red";
    } else {
      item.innerHTML = "O";
      item.style.color = "blue";
    }
  }

  lookForAWinner();
}

function r2c1() {
  const item = document.getElementById("row2-column1");

  if (item.innerHTML === "" && isNotHaveAWinner) {
    if (swapTurn()) {
      item.innerHTML = "X";
      item.style.color = "red";
    } else {
      item.innerHTML = "O";
      item.style.color = "blue";
    }
  }

  lookForAWinner();
}

function r2c2() {
  const item = document.getElementById("row2-column2");

  if (item.innerHTML === "" && isNotHaveAWinner) {
    if (swapTurn()) {
      item.innerHTML = "X";
      item.style.color = "red";
    } else {
      item.innerHTML = "O";
      item.style.color = "blue";
    }
  }

  lookForAWinner();
}

function r2c3() {
  const item = document.getElementById("row2-column3");

  if (item.innerHTML === "" && isNotHaveAWinner) {
    if (swapTurn()) {
      item.innerHTML = "X";
      item.style.color = "red";
    } else {
      item.innerHTML = "O";
      item.style.color = "blue";
    }
  }

  lookForAWinner();
}

function r3c1() {
  const item = document.getElementById("row3-column1");

  if (item.innerHTML === "" && isNotHaveAWinner) {
    if (swapTurn()) {
      item.innerHTML = "X";
      item.style.color = "red";
    } else {
      item.innerHTML = "O";
      item.style.color = "blue";
    }
  }

  lookForAWinner();
}

function r3c2() {
  const item = document.getElementById("row3-column2");

  if (item.innerHTML === "" && isNotHaveAWinner) {
    if (swapTurn()) {
      item.innerHTML = "X";
      item.style.color = "red";
    } else {
      item.innerHTML = "O";
      item.style.color = "blue";
    }
  }

  lookForAWinner();
}

function r3c3() {
  const item = document.getElementById("row3-column3");

  if (item.innerHTML === "" && isNotHaveAWinner) {
    if (swapTurn()) {
      item.innerHTML = "X";
      item.style.color = "red";
    } else {
      item.innerHTML = "O";
      item.style.color = "blue";
    }
  }

  lookForAWinner();
}

/**
 * VERIFICAÇÃO DO VENCEDOR DA PARTIDA ATUAL
 *
 */

function showWinnerName(playerMark) {
  const displayNameWinner = document.getElementById("winner-name");
  const namePlayer1 = `Parabéns, ${player1.value}`;
  const namePlayer2 = `Parabéns, ${player2.value}`;

  if (isNotHaveAWinner) {
    if (playerMark === "X") {
      displayNameWinner.textContent = namePlayer1.toString();
    } else {
      displayNameWinner.textContent = namePlayer2.toString();
    }
  }

  isNotHaveAWinner = false;
}

function lookForAWinner() {
  const [
    space1,
    space2,
    space3,
    space4,
    space5,
    space6,
    space7,
    space8,
    space9,
  ] = [
    row1Column1.innerHTML.toString(),
    row1Column2.innerHTML.toString(),
    row1Column3.innerHTML.toString(),
    row2Column1.innerHTML.toString(),
    row2Column2.innerHTML.toString(),
    row2Column3.innerHTML.toString(),
    row3Column1.innerHTML.toString(),
    row3Column2.innerHTML.toString(),
    row3Column3.innerHTML.toString(),
  ];

  if (
    space1 === space5 &&
    space5 === space9 &&
    space1 !== "" &&
    space5 !== "" &&
    space9 !== ""
  ) {
    showWinnerName(space1);
    console.log("Venceu na diagonal \\");
  } else if (
    space3 === space5 &&
    space5 === space7 &&
    space3 !== "" &&
    space5 !== "" &&
    space7 !== ""
  ) {
    showWinnerName(space3);
    console.log("Venceu na outra diagonal /");
  } else if (
    space1 === space2 &&
    space2 === space3 &&
    space1 !== "" &&
    space2 !== "" &&
    space3 !== ""
  ) {
    showWinnerName(space1);
    console.log("Venceu linha1");
  } else if (
    space4 === space5 &&
    space5 === space6 &&
    space4 !== "" &&
    space5 !== "" &&
    space6 !== ""
  ) {
    showWinnerName(space4);
    console.log("Venceu linha2");
  } else if (
    space7 === space8 &&
    space8 === space9 &&
    space7 !== "" &&
    space8 !== "" &&
    space9 !== ""
  ) {
    showWinnerName(space7);
    console.log("Venceu linha3");
  } else if (
    space1 === space4 &&
    space4 === space7 &&
    space1 !== "" &&
    space4 !== "" &&
    space7 !== ""
  ) {
    showWinnerName(space1);
    console.log("Venceu coluna1");
  } else if (
    space2 === space5 &&
    space5 === space8 &&
    space2 !== "" &&
    space5 !== "" &&
    space8 !== ""
  ) {
    showWinnerName(space2);
    console.log("Venceu coluna2");
  } else if (
    space3 === space6 &&
    space6 === space9 &&
    space3 !== "" &&
    space6 !== "" &&
    space9 !== ""
  ) {
    showWinnerName(space3);
    console.log("Venceu coluna3");
  }
}
