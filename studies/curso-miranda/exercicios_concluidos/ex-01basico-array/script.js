const ADD = document.querySelector('#js-btn-add');
const REMOVE = document.querySelector('#js-btn-remove');
const ADDSTART = document.querySelector('#js-btn-addstart');
const VACATION = document.querySelector('#js-btn-vacation');
const VACATIONREP = document.querySelector('#js-btn-vacationreport');
const REVER = document.querySelector('#js-btn-reverse');
let RESULT = document.querySelector('#js-result');
let FUN = document.querySelector('#js-fun');
let CHARACTERS = [];
let CHARACTERSVACATION = [];

// Funções que influenciam a primeira div (js-result)
ADD.addEventListener('click', () => {
    let input = prompt('Digite o nome do personagem:');
    alert(`O personagem criado se chama ${input}.`);
    CHARACTERS.push(input);
  
    return showResult();
});

REMOVE.addEventListener('click', () => {
    confirm('Tem certeza?') ? CHARACTERS.pop() : alert('Operação cancelada.');
  
    return showResult();
});

ADDSTART.addEventListener('click', () => {
    let inputStart = prompt('Digite o nome do personagem:');
    alert(`O personagem criado se chama ${inputStart}.`);
    CHARACTERS.unshift(inputStart);
  
    return showResult();
});

REVER.addEventListener('click', () => {
    CHARACTERS.reverse();
  
    return showResult();
});


function showResult() {
    RESULT.innerHTML=`
    <p>Até agora existem os seguintes personagens: <span class="c1">${CHARACTERS}</span>.</p>
    <p>Há ${CHARACTERS.length} personagens em sua lista.</p>
    `;
}

// Funções que influenciam a segunda div (js-fun)
VACATION.addEventListener('click', () => {
    return (CHARACTERS[0] !== undefined ? showFun() : showFunError())
});

function showFun() {
    CHARACTERSVACATION.push(CHARACTERS[0]);

    return FUN.innerHTML=`
    <p>Você mandou <span class="c1">${CHARACTERS[0]}</span> tirar férias no Caribe.</p>
    <p>Até agora, os personagens já saíram ${CHARACTERSVACATION.length} vezes de férias.
    `;
}
    function showFunError() {
        return FUN.innerHTML=`
        <p>Você não tem ninguém para sair de férias!</p>
        `;
    }

// Funções que não influenciam divs
VACATIONREP.addEventListener('click', () => { 
    return alert(`Eis a lista de férias, chefe: ${CHARACTERSVACATION}.`)
});