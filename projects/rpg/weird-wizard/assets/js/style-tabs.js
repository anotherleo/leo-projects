// code for horizontal tabs
const TABS = document.getElementsByClassName('js-tab');

const TAB_SHEET = document.querySelector('#js-tab-sheet');
const BTN_TAB_SHEET = document.querySelector('#js-btn-sheet');
const TAB_ANCESTRALITY = document.querySelector('#js-tab-ancestrality');
const BTN_TAB_ANCESTRALITY = document.querySelector('#js-btn-ancestrality');

const TAB_ANCESTRALITY = document.querySelector('#js-tab-profession');
const BTN_TAB_ANCESTRALITY = document.querySelector('#js-btn-profession');

const TAB_ANCESTRALITY = document.querySelector('#js-tab-novice');
const BTN_TAB_ANCESTRALITY = document.querySelector('#js-btn-novice');


const TAB_ANCESTRALITY = document.querySelector('#js-tab-expert');
const BTN_TAB_ANCESTRALITY = document.querySelector('#js-btn-expert');

const TAB_ANCESTRALITY = document.querySelector('#js-tab-master');
const BTN_TAB_ANCESTRALITY = document.querySelector('#js-btn-master');
const TAB_ANCESTRALITY = document.querySelector('#js-tab-spells');
const BTN_TAB_ANCESTRALITY = document.querySelector('#js-btn-spells');
const TAB_ANCESTRALITY = document.querySelector('#js-tab-dicelog');
const BTN_TAB_ANCESTRALITY = document.querySelector('#js-btn-dicelog');



// function for hiding the tabs in the singlepage
function hideAll() {
    for (let i = 0; i < TABS.length; i++) {
        TABS[i].style.display = 'none';
    }
};
hideAll(); // hide the tabs by default
TAB_SHEET.style.display = 'block'; // show this tab by default

// buttons for displaying
BTN_TAB_SHEET.addEventListener('click', () => {
    hideAll();
    TAB_SHEET.style.display = 'block';
});

BTN_TAB_ANCESTRALITY.addEventListener('click', () => {
    hideAll();
    BTN_TAB_ANCESTRALITY.style.display = 'block';
});

/* 
    para colocar mais tabs:
    a) criar um botão e uma div no html
    b) colocar ambos como consts no js
    c) add um listener no botão. 
    d) não esquecer da hideAll().
*/