// code for horizontal tabs

// DOM objects
const MAIN_UI = document.querySelector('#js-main');
const TABS = document.getElementsByClassName('js-tab');

const TAB_STORYLINE = document.querySelector('#js-tab-storyline');
const BTN_TAB_STORYLINE = document.querySelector('#js-tab-btn-storyline');
const TAB_CHARACTER = document.querySelector('#js-tab-character');
const BTN_TAB_CHARACTER = document.querySelector('#js-tab-btn-character');
const TAB_HOUSE = document.querySelector('#js-tab-house');
const BTN_TAB_HOUSE = document.querySelector('#js-tab-btn-house');
const TAB_WORLD = document.querySelector('#js-tab-world');
const BTN_TAB_WORLD = document.querySelector('#js-tab-btn-world');
const TAB_LOG = document.querySelector('#js-tab-log');
const BTN_TAB_LOG = document.querySelector('#js-tab-btn-log');
const TAB_SPECIAL_TEMPORARY_CONFLICT = document.querySelector('#js-tab-temporary-conflict');

// function for hiding the tabs in the singlepage
function hideAll() {
    for (let i = 0; i < TABS.length; i++) {
        TABS[i].style.display = 'none';
    }
};
hideAll(); // hide the tabs by default
TAB_WORLD.style.display = 'block'; // show this tab by default

// buttons for displaying
BTN_TAB_STORYLINE.addEventListener('click', () => {
    hideAll();
    TAB_STORYLINE.style.display = 'block';
});

BTN_TAB_CHARACTER.addEventListener('click', () => {
    hideAll();
    TAB_CHARACTER.style.display = 'block';
});

BTN_TAB_HOUSE.addEventListener('click', () => {
    hideAll();
    TAB_HOUSE.style.display = 'block';
});

BTN_TAB_WORLD.addEventListener('click', () => {
    hideAll();
    TAB_WORLD.style.display = 'block';
});

BTN_TAB_LOG.addEventListener('click', () => {
    hideAll();
    TAB_LOG.style.display = 'block';
});

/* para colocar mais tabs:
    a) criar um botão e uma div no html
    b) colocar ambos como consts no js
    c) add um listener no botão. 
    d) não esquecer da hideAll().
*/