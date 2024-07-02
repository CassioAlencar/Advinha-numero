alert('Boas vindas ao jogo do número secreto!');

let numeroSecreto, chute, tentativas, maxTentativas = 5;

function jogarNovamente() {
  numeroSecreto = parseInt(Math.random() * 30 + 1);
  console.log(numeroSecreto); 
  tentativas = 1;
  chute = null; // loop

  while (chute != numeroSecreto && tentativas <= maxTentativas) {
    chute = prompt(`Tentativa ${tentativas}/${maxTentativas}: Escolha um número entre 1 e 30`);
    
    if (isNaN(chute) || chute === "" || chute < 1 || chute > 30) {
      alert("Entrada inválida. Insira um número entre 1 e 30.");
      continue; 
    }

    if (chute == numeroSecreto) {
      alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas!`);
    } else {
      alert(`O número secreto é ${chute > numeroSecreto ? 'menor' : 'maior'} que ${chute}`);
      tentativas++;
    }
  }

  if (tentativas > maxTentativas) {
    alert(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`);
  }

  if (confirm("Deseja jogar novamente?")) {
    jogarNovamente();
  }
}

jogarNovamente(); // para iniciar o jogo
