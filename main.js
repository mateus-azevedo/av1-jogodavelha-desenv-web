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

const selectElements = document.querySelectorAll(["select-space"]);
const board = document.querySelectorAll(["board-game"]);
let isPlayer1Turn;

for (const item of selectElements) {
  item.addEventListener("click", handleClick, { once: true });
}

function placeMark(element, classToAdd) {
  element.classList.add(classToAdd);
}

function swapTurn() {
  isPlayer1Turn = !isPlayer1Turn;

  board.classList.remove("player1-turn");
  board.classList.remove("player2-turn");

  if (isPlayer1Turn) {
    board.classList.add("player1-turn");
  } else {
    board.classList.add("player2-turn");
  }
}

function handleClick(e) {
  const element = e.target;
  const classToAdd = isPlayer1Turn ? "player1-turn" : "player2-turn";

  placeMark(element, classToAdd);
}
