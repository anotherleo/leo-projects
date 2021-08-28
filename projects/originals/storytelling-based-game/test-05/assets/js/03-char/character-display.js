// DOM & character sheet display

/* profile */
const DISPLAY_ICON = document.querySelector('#js-character-icon');
DISPLAY_ICON.innerHTML = `${character.icon}`;

const DISPLAY_NAME = document.querySelector('#js-character-name');
DISPLAY_NAME.innerHTML = `${character.name}`;

const DISPLAY_LEVEL = document.querySelector('#js-character-level');
DISPLAY_LEVEL.innerHTML = `LV. ${character_lv}`;

const DISPLAY_TRADITIONS = document.querySelector('#js-character-traditions');
let char_traditions = character.traditions;
for (let i = 0; i < char_traditions.length; i++) {
    DISPLAY_TRADITIONS.innerHTML += `<p>${char_traditions[i].name}</p>`;
}

/* traits */
const DISPLAY_TRAITS = document.querySelector('#js-character-sheet-traits');
const DISPLAY_TRAITS_PROFILE = document.querySelector('#js-character-sheet-traits--profilelist');
function showTraits() {
    let char_traits = character.traits;
    for (let i = 0; i < char_traits.length; i++) {
        DISPLAY_TRAITS_PROFILE.innerHTML+=`${char_traits[i].name}.&nbsp;`;
    }
}
showTraits();

/* attributes */
const DISPLAY_ATTRIBUTES_CONTAINER = document.querySelector('#js-character-sheet-attributes');

function showAttributes() {
    return DISPLAY_ATTRIBUTES_CONTAINER.innerHTML = `
    <h4><span>${character_hp}</span>Vida</h4>
    <h4 class="notfeature"><span>${character_mp}</span>Mana</h4>
    <h4><span>${character_str}</span>Força</h4>
    <h4 class="notfeature"><span>${character_dex}</span> Destreza</h4>
    <h4 class="notfeature"><span>${character_agi}</span> Agilidade</h4>
    <h4 class="notfeature"><span>${character_wil}</span> Vontade</h4>
    <h4 class="notfeature"><span>${character_ima}</span> Imaginação</h4>
    <h4 class="notfeature"><span>${character_man}</span> Manipulação</h4>
    <h4 class="notfeature"><span>${character_int}</span> Inteligência</h4>
    <h4 class="notfeature"><span>${character_cha}</span> Carisma</h4>
    <h4 class="notfeature"><span>${character_wis}</span> Sabedoria</h4>
    <h4 class="notfeature"><span>${character_per}</span> Percepção</h4>
    <h4 class="notfeature"><span>${character_sta}</span> Vigor</h4>
    <h4 class="notfeature"><span>${character_pre}</span> Presença</h4>
    `;
}
showAttributes();

/* Inventory */
const DISPLAY_INVENTORY = document.querySelector('#js-character-sheet-inventory');






