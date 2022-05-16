// FILTROS
const CARDS = document.getElementsByClassName("card");
const FILTROS = document.getElementById("filtroCategoria");
let FILTRAGEM = document.getElementById("filtroCategoria").value;

// Esconder os cards
function hideCards() {
    for (i = 0; i < CARDS.length; i++) {
        CARDS[i].classList.remove("show");
        CARDS[i].classList.add("hide");
    }
}

function filterCardCategory() {
    let valueOption = document.getElementById("filtroCategoria").value;
    for (i = 0; i < CARDS.length; i++) {
        let a = CARDS[i].classList.contains(valueOption);
        if (a === true) {
            CARDS[i].classList.remove("hide");
            CARDS[i].classList.add("show");
        }
    }
}

// ACESSAR FILTRO
const SUBMIT = document.querySelector('#filterButton');
SUBMIT.addEventListener('click', () => {
    hideCards();
    filterCardCategory();
});

function filterCards() {
    hideCards();
    filterCardCategory();
}