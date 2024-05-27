var prompt = require("prompt-sync")();

//Função para verificar se o jogador conseguiu fazer 10 pontos ou não
// Função para verificar se o jogador digital 1, 2 ou 3

let pontos = 0;

// BOAS-VINDAS

console.log(
  "Seja bem-vindo ao Futebol Quizz!\nEste jogo consiste em 7 perguntas sobre futebol, e para ganhar você precisar acertar pelo menos 5 delas.\nBoa sorte!"
);

let nomeDoJogador = prompt("Digite seu nome: ").toUpperCase();

console.log(`Vamos começar ${nomeDoJogador}!`);

// PERGUNTA 1

let pergunta1 = +prompt(
  "Qual é o esporte mais popular do mundo?\n1 -  Basquete\n2 - Futebol\n3 - Tênis\n"
);

while (pergunta1 !== 1 && pergunta1 !== 2 && pergunta1 !== 3) {
  console.log("Opção inválida");
  pergunta1 = +prompt(
    "Qual é o esporte mais popular do mundo?\n1 - Basquete\n2 - Futebol\n3 - Tênis = "
  );
}

switch (pergunta1) {
  case 1:
    console.log("Você errou! A opção certa era a 2!");
    break;
  case 2:
    console.log("Você acertou!");
    pontos++;
    console.log(`Você está com ${pontos} ponto(s)!`);
    break;
  case 3:
    console.log("Você errou! A opção certa era a 2!");
    break;
}

// PERGUNTA 2

// let pergunta2
