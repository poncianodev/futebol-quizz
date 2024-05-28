var prompt = require("prompt-sync")();

// FUNÇÃO PARA VALIDAR A RESPOSTA DO USUÁRIO

function validarResposta(pergunta) {
  let resposta = +prompt(pergunta);

  while (resposta !== 1 && resposta !== 2 && resposta !== 3) {
    console.log("Opção inválida! Vamos tentar novamente.");
    resposta = +prompt(pergunta);
  }

  return resposta;
}

// FUNÇÃO PARA VERIFICAR SE O USUÁRIO ACERTOU

function verificarAcerto(resposta, correta) {
  if (resposta === correta) {
    console.log("Você acertou!");
    return true;
  } else {
    console.log(`Você errou! A resposta correta era a ${correta}`);
    return false;
  }
}

// FUNÇÃO PARA VERIFICAR SE O USUÁRIO VENCEU OU NÃO O JOGO

function verificarVitoria(pontos) {
  if (pontos >= 3) {
    return console.log(`Você fez ${pontos} pontos e ganhou o jogo! Parabéns`);
  } else {
    return console.log(`Você fez ${pontos} ponto(s) por isso não conseguiu ganhar, tente novamente!`);
  }
}

// INÍCIO DO JOGO

do {
  console.clear();

  let pontos = 0;

  console.log(
    "Seja bem-vindo ao Futebol Quizz!\nEste jogo consiste em 5 perguntas sobre futebol, e para ganhar você precisar acertar pelo menos 3 delas.\nBoa sorte!"
  );

  let nomeDoJogador = prompt("Digite seu nome = ").toUpperCase();

  console.log(`Vamos começar ${nomeDoJogador}!`);

  // PERGUNTA 1

  let pergunta1 = validarResposta(
    "Qual é o esporte mais popular do mundo?  1 -  Basquete, 2 - Futebol, 3 - Tênis = "
  );

  if (verificarAcerto(pergunta1, 2)) {
    pontos++;
  }

  // PERGUNTA 2

  let pergunta2 = validarResposta(
    "Qual é o país de origem do jogador Cristiano Ronaldo?  1 - Espanha, 2 - Itália, 3 - Portugal = "
  );

  if (verificarAcerto(pergunta2, 3)) {
    pontos++;
  }

  // PERGUNTA 3

  let pergunta3 = validarResposta(
    "Quantos jogadores cada equipe tem em campo em uma partida oficial de futebol?  1 - 11 jogadores, 2 - 9 jogadores, 3 - 13 jogadores = "
  );

  if (verificarAcerto(pergunta3, 1)) {
    pontos++;
  }

  // PERGUNTA 4

  let pergunta4 = validarResposta(
    "Qual é o clube de futebol que tem mais títulos da UEFA Champions League?  1 - Barcelona, 2 - Real Madrid, 3 - Bayern de Munique = "
  );

  if (verificarAcerto(pergunta4, 2)) {
    pontos++;
  }

  // PERGUNTA 5

  let pergunta5 = validarResposta(
    'Qual é o nome do jogador brasileiro conhecido como "O Fenômeno"?  1 - Romário, 2 - Ronaldinho Gaúcho, 3 - Ronaldo = '
  );

  if (verificarAcerto(pergunta5, 3)) {
    pontos++;
  }

  verificarVitoria(pontos);

  // VERIFICA SE O USUÁRIO DESEJA JOGAR NOVAMENTE

  var continuar = +prompt(
    "Jogar novamente? Digite 1 para continuar, ou 2 para sair = "
  );

  while (continuar !== 1 && continuar !== 2) {
    console.log("Opção Inválida");
    continuar = +prompt(
      "Jogar novamente? Digite 1 para continuar, ou 2 para sair = "
    );
  }
} while (continuar === 1);

// FIM DO JOGO