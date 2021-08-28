const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('js-result');

numeroTitulo.innerHTML = `<span class="c1">${numero}</span>`;
texto.innerHTML += `<p>A raiz quadrada de <span class="c1">${numero}</span> é <span class="c2">${Math.pow(numero, 0.5)}</span>.</p>`;
texto.innerHTML += `<p><span class="c1">${numero}</span> elevado ao cubo é <span class="c2">${Math.pow(numero, 3)}</span>.</p>`;
texto.innerHTML += `<p><span class="c1">${numero}</span> arredondado é <span class="c2">${Math.round(numero)}</span>.</p>`;
texto.innerHTML += `<p><span class="c1">${numero}</span> arredondado para baixo é <span class="c2">${Math.floor(numero)}</span>.</p>`;
texto.innerHTML += `<p><span class="c1">${numero}</span> arredondado para cima é <span class="c2">${Math.ceil(numero)}</span>.</p>`;
texto.innerHTML += `<p><span class="c1">${numero}</span> é NaN? <span class="c2">${Number.isNaN(numero)}</span>.</p>`;
texto.innerHTML += `<p><span class="c1">${numero}</span> com duas casas decimais é <span class="c2">${numero.toFixed(2)}</span>.</p>`;
texto.innerHTML += `<p><span class="c1">${numero}</span> é um número inteiro? <span class="c2">${Number.isInteger(numero)}</span>.</p>`;