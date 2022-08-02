// _S = spell;
// _P = profession;
const LOG = document.querySelector('#js-dicelog-container');

// dice
function rolld6() {
    return Math.round(Math.random() * (6 - 1) + 1);
};
function rolld20() {
    return Math.round(Math.random() * (20 - 1) + 1);
};

// PROFESSIONS
const BTN_P_SEER = document.querySelector('#js-btn-seer-luck');
const ROLL_P_SEER = document.querySelector('#js-seer-luck');
BTN_P_SEER.addEventListener('click', () => {
    let i = rolld20();
    LOG.innerHTML+=`<p>Your seer luck roll was ${i}. ${i >= 10 ? 'You succeed' : 'You failed'}.</p>`
    return ROLL_P_SEER.innerHTML=`${i}`;
})

// SPELLS
const BTN_S_HOWL = document.querySelector('#js-btn-spell-howling-gale');
const ROLL_S_HOWL = document.querySelector('#js-spell-howling-gale-damage');
BTN_S_HOWL.addEventListener('click', () => {
    let i = rolld6();
    LOG.innerHTML+=`<p>Howling Gale has done ${i} damage.</p>`
    return ROLL_S_HOWL.innerHTML=`${i}`;
});

