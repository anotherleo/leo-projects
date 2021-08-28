const CESTO_FRUTAS = ['banana', 'maçã', 'laranja', 'bergamota', 'limão'];
const [FRUTA_THOMAS, FRUTA_MICHELLE, FRUTA_AZENHA, ...R] = CESTO_FRUTAS;

const EXIBICAO_FRUTAS = document.querySelector('#js-frutas');
EXIBICAO_FRUTAS.innerHTML=`${CESTO_FRUTAS}`;

const EXIBICAO_THOMAS = document.querySelector('#js-fruta-thomas');
EXIBICAO_THOMAS.innerHTML=`${FRUTA_THOMAS}`;
const EXIBICAO_MICHELLE = document.querySelector('#js-fruta-michelle');
EXIBICAO_MICHELLE.innerHTML=`${FRUTA_MICHELLE}`;
const EXIBICAO_AZENHA = document.querySelector('#js-fruta-azenha');
EXIBICAO_AZENHA.innerHTML=`${FRUTA_AZENHA}`;
const EXIBICAO_RESTO = document.querySelector('#js-fruta-resto');
EXIBICAO_RESTO.innerHTML=`${R}`;