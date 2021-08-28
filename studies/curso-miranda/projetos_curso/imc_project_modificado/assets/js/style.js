// code for horizontal tabs

const TABS = document.getElementsByClassName('js-tab');
const BTN_CALC = document.querySelector('#tab-calculator-btn');
const TAB_CALC = document.querySelector('#tab-calculator');
const BTN_ABOUT = document.querySelector('#tab-about-btn');
const TAB_ABOUT = document.querySelector('#tab-about');

function hideAll() {
    for (let i = 0; i < TABS.length; i++) {
        TABS[i].style.display = 'none';
    }
}

hideAll(); // hide the tabs by default
TAB_CALC.style.display = 'block'; // show this tab by default

BTN_CALC.addEventListener('click', () => {
    hideAll();
    TAB_CALC.style.display = 'block';
});

BTN_ABOUT.addEventListener('click', () => {
    hideAll();
    TAB_ABOUT.style.display = 'block';
});

/* para colocar mais tabs:
    a) criar um botão e uma div no html
    b) colocar ambos como consts no js
    c) add um listener no botão. 
    d) não esquecer da hideAll().
*/