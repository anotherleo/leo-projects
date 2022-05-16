// FILTROS
const CARDS = document.getElementsByClassName("card");
const FILTROS = document.getElementById("characterClass");
let BAG = [];

// Esconder os cards
function hideCards() {
    for (i = 0; i < CARDS.length; i++) {
        CARDS[i].classList.remove("show");
        CARDS[i].classList.add("hide");
        console.log(CARDS[i]);
    }
}

// Mostrar todos os cards
function showCards() {
    for (i = 0; i < CARDS.length; i++) {
        CARDS[i].classList.remove("hide");
        CARDS[i].classList.add("show");
        console.log(CARDS[i]);
    }
}

// filtrar pela classe
function filterCharacterClass() {
    let classOption = document.getElementById("characterClass").value;
    for (i = 0; i < CARDS.length; i++) {
        let a = CARDS[i].classList.contains(classOption);
        if (a === true) {
            CARDS[i].classList.remove("hide");
            CARDS[i].classList.add("show");
        }
    }
}

// filtrar pelo Tier
function filterCharacterTier() {
    let tierOption = document.getElementById("characterTier").value;
    for (i = 0; i < CARDS.length; i++) {
        let b = CARDS[i].classList.contains(characterTier);
        if (a === true) {
            CARDS[i].classList.remove("hide");
            CARDS[i].classList.add("show");
        }
    }    
}

// filtrar pela classe e tier
function filterCharacterClassAndTier() {
    let classOption = document.getElementById("characterClass").value;
    let tierOption = document.getElementById("characterTier").value;
    for (i = 0; i < CARDS.length; i++) {
        let a = CARDS[i].classList.contains(classOption);
        let b = CARDS[i].classList.contains(tierOption);
        if (a === true & b === true) {
            CARDS[i].classList.remove("hide");
            CARDS[i].classList.add("show");
        }
    }
}

// BUG! filtrar com Apenas multiclasse
function filterCharacterMulticlass() {
    let multiOption = document.getElementById("characterMulticlass").value;
    for (i = 0; i < CARDS.length; i++) {
        let a = CARDS[i].classList.contains("class__multiclass");
        if (a === true && multiOption === true) {
            CARDS[i].classList.remove("hide");
            CARDS[i].classList.add("show");
        }
    }    
}

// testing
function filterCharacterClass2() {
    let classOption = document.getElementById("characterClass").value;
    for (i = 0; i < CARDS.length; i++) {
        let a = CARDS[i].classList.contains(classOption);
        if (a === true) {
            BAG += CARDS[i];
        }
    }
}

// ACESSAR FILTRO
function filterCards() {
    filterCharacterClassAndTier();
}

const SUBMIT = document.querySelector('#filterButton');
SUBMIT.addEventListener('click', () => {
    hideCards();
    filterCards();
});

const RESET = document.querySelector('#filterReset');
RESET.addEventListener('click', () => {
    showCards();
});
