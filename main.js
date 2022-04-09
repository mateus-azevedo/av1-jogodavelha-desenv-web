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

function start() {
  disableInputName(player1, player2);
  // EXEMPLO DE MANIPULACAO E RECUPERACAO DE DADOS DA DOM
  // let conteudo = document.getElementById("start-button");
  // console.log(conteudo.innerHTML)
  // conteudo.innerHTML = "Valendo!!!"
}
