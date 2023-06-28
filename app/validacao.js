function verificaValorValido(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: dê um palpite numérico</div>`;
    return;
  }
  if (numeroMaiorMenorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }
  if (numero === secretNumber) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${secretNumber}.</h3>
    
    <button id="jogar-novamente" class="btn__jogar">Jogar Novamente</button>
    `;
  } else if (numero > secretNumber) {
    elementoChute.innerHTML += `
    <div>
        O número secreto é menor
        <i class="fa-solid fa-angle-down"></i>
      </div>`;
  } else {
    elementoChute.innerHTML += `
    <div>
        O número secreto é maior
        <i class="fa-solid fa-angle-up"></i>
      </div>`;
  }
}
function numeroMaiorMenorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
