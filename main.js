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
  disableInputName(player1, player2);
  hideAllGameMove();
  // EXEMPLO DE MANIPULACAO E RECUPERACAO DE DADOS DA DOM
  // let conteudo = document.getElementById("start-button");
  // console.log(conteudo.innerHTML)
  // conteudo.innerHTML = "Valendo!!!"
}

const board = document.querySelectorAll(["board-game"]);
let isPlayer1Turn;

/**
 *  IREI PEGAR TODOS ELEMENTOS POR ID
 */

document.getElementById("row1-column1").addEventListener("click", r1c1, true);
document.getElementById("row1-column2").addEventListener("click", r1c2, true);
document.getElementById("row1-column3").addEventListener("click", r1c3, true);
document.getElementById("row2-column1").addEventListener("click", r2c1, true);
document.getElementById("row2-column2").addEventListener("click", r2c2, true);
document.getElementById("row2-column3").addEventListener("click", r2c3, true);
document.getElementById("row3-column1").addEventListener("click", r3c1, true);
document.getElementById("row3-column2").addEventListener("click", r3c2, true);
document.getElementById("row3-column3").addEventListener("click", r3c3, true);

/**
 *
 *
 */
function swapTurn() {
  isPlayer1Turn = !isPlayer1Turn;
  console.log(isPlayer1Turn);
  return isPlayer1Turn;
}

function r1c1() {
  const item = document.getElementById("row1-column1");

  if (item.innerHTML === "") {
    if (swapTurn()) {
      item.innerHTML = "X";
    } else {
      item.innerHTML = "O";
    }
  }
}

function r1c2() {
  const item = document.getElementById("row1-column2");

  if (item.innerHTML === "") {
    if (swapTurn()) {
      item.innerHTML = "X";
    } else {
      item.innerHTML = "O";
    }
  }
}

function r1c3() {
  const item = document.getElementById("row1-column3");

  if (item.innerHTML === "") {
    if (swapTurn()) {
      item.innerHTML = "X";
    } else {
      item.innerHTML = "O";
    }
  }
}

function r2c1() {
  const item = document.getElementById("row2-column1");

  if (item.innerHTML === "") {
    if (swapTurn()) {
      item.innerHTML = "X";
    } else {
      item.innerHTML = "O";
    }
  }
}

function r2c2() {
  const item = document.getElementById("row2-column2");

  if (item.innerHTML === "") {
    if (swapTurn()) {
      item.innerHTML = "X";
    } else {
      item.innerHTML = "O";
    }
  }
}

function r2c3() {
  const item = document.getElementById("row2-column3");

  if (item.innerHTML === "") {
    if (swapTurn()) {
      item.innerHTML = "X";
    } else {
      item.innerHTML = "O";
    }
  }
}

function r3c1() {
  const item = document.getElementById("row3-column1");

  if (item.innerHTML === "") {
    if (swapTurn()) {
      item.innerHTML = "X";
    } else {
      item.innerHTML = "O";
    }
  }
}

function r3c2() {
  const item = document.getElementById("row3-column2");

  if (item.innerHTML === "") {
    if (swapTurn()) {
      item.innerHTML = "X";
    } else {
      item.innerHTML = "O";
    }
  }
}

function r3c3() {
  const item = document.getElementById("row3-column3");

  if (item.innerHTML === "") {
    if (swapTurn()) {
      item.innerHTML = "X";
    } else {
      item.innerHTML = "O";
    }
  }
}
