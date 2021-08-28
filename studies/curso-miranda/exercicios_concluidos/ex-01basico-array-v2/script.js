const ADD = document.querySelector('#js-btn-add');
const REMOVE = document.querySelector('#js-btn-remove');
const ADDSTART = document.querySelector('#js-btn-addstart');
const VACATION = document.querySelector('#js-btn-vacation');
const VACATIONREP = document.querySelector('#js-btn-vacationreport');
const REVER = document.querySelector('#js-btn-reverse');
const SLAYNOW = document.querySelector('#js-btn-slaydragon');
const RESULT = document.querySelector('#js-result');
const FUN = document.querySelector('#js-fun');
const SLAY = document.querySelector('#js-slay');
let CHARACTERS = [];
let CHARACTERSVACATION = [];
let DRAGONKILLS = 0;
let LOOT = 0; // temporaria.
let LOOTFINAL = 0;

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
    <p><span class="c1">${CHARACTERS[0]}</span> é o aventureiro do momento.</p>
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

// Funções que influenciam a terceira div (js-slay)
SLAYNOW.addEventListener('click', () => {
    return (CHARACTERS[0] !== undefined ? showSlay() : showSlayError());
})

function showSlay() {
    DRAGONKILLS++;
    LOOT = Math.round(Math.random() * (1000 - 100) + 100);
    LOOTFINAL += LOOT;
    return SLAY.innerHTML=`
    <p>Seus aventureiros mataram um <span class="c2">dragão</span> e lucraram <span class="c2">${LOOT}</span> em espólios.</p>
    <p>Até o momento seus aventureiros mataram ${DRAGONKILLS} dragões e trouxeram <span class="c2">${LOOTFINAL}</span> moedas de ouro!</p>
    `;
}
    function showSlayError() {
        return SLAY.innerHTML=`
        <p>Você não tem aventureiros!</p>
        `;
    }

// Funções que não influenciam divs
VACATIONREP.addEventListener('click', () => { 
    return alert(`Eis a lista de férias, chefe: ${CHARACTERSVACATION}.`)
});