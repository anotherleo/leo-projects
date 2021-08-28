// Capturar evento de submit do form
const FORM = document.querySelector('#js-formulario')

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const PESO = Number(inputPeso.value);
    const ALTURA = Number(inputAltura.value);

    if (!PESO) {
        setResultado(`Peso inválido`, false);
        return;
    }
    if (!ALTURA) {
        setResultado(`Altura inválida`, false);
        return;
    }

    const CALCIMC = getIMC(PESO, ALTURA);
    const NIVELIMC = getNivelImc(CALCIMC);

    const msg = `Seu IMC é <strong>${CALCIMC}</strong>, classificado como <strong>${NIVELIMC}</strong>.`;

    setResultado (msg, true);
});

function getIMC(PESO, ALTURA) {
    const imc = PESO / ALTURA ** 2;
    return imc.toFixed(2);
}

function getNivelImc (CALCIMC) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (CALCIMC >= 39.9) {
        return nivel[5];
    }
    if (CALCIMC >= 34.9) {
        return nivel[4];
    }
    if (CALCIMC >= 29.9) {
        return nivel[3];
    }
    if (CALCIMC >= 24.9) {
        return nivel[2];
    }
    if (CALCIMC >= 18.5) {
        return nivel[1];
    }
    if (CALCIMC < 18.5) {
        return nivel[0];
    }
}

function criarParagrafo () {
    const createP = document.createElement('p');
    return createP;
}

function setResultado (msg, isValid) {
    const RESULTADO = document.querySelector('#js-resultado');
    RESULTADO.innerHTML = '';
    
    const PARAGRAPH = criarParagrafo();
    isValid === true ? PARAGRAPH.classList.add('paragrafo-resultado') : PARAGRAPH.classList.add('paragrafo-invalido');

    PARAGRAPH.innerHTML = msg;
    RESULTADO.appendChild(PARAGRAPH);
}