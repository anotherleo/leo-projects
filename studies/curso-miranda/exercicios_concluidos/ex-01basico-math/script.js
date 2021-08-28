const START = document.querySelector('#js-btn-start');
const RESULT = document.querySelector('#js-result');

START.addEventListener('click', () => {
    console.log("oi");
    let input = Number(prompt('Digite um número:'));

    return RESULT.innerHTML=`
    <h2>Seu número é <span class="c1">${input}</span></h2>
    <p>A raiz quadrada de <span class="c1">${input}</span> é <span class="c2">${Math.pow(input, 0.5)}</span>.</p>
    <p><span class="c1">${input}</span> elevado ao cubo é <span class="c2">${Math.pow(input, 3)}</span>.</p>
    <p><span class="c1">${input}</span> é um número inteiro? <span class="c2">${Number.isInteger(input)}</span>.</p>
    <p><span class="c1">${input}</span> é NaN? <span class="c2">${Number.isNaN(input)}</span>.</p>
    <p><span class="c1">${input}</span> arredondado é <span class="c2">${Math.round(input)}</span>.</p>
    <p><span class="c1">${input}</span> arredondado para baixo é <span class="c2">${Math.floor(input)}</span>.</p>
    <p><span class="c1">${input}</span> arredondado para cima é <span class="c2">${Math.ceil(input)}</span>.</p>
    <p><span class="c1">${input}</span> com duas casas decimais é <span class="c2">${input.toFixed(2)}</span>.</p>
    `;
});