/* utility */
function plus_sign(number) {
    if (number >= 1) {
        return `+${number}`;
    } else {
        return number;
    }
}

/* attribute */
let ATTRIBUTE = document.querySelector('#dnd-attribute');
const SHOW_ATTRIBUTE = document.querySelector('#dnd-attribute-exhibitor');
let ATTRIBUTE_INPUT = 0;
ATTRIBUTE.oninput = function() {
    SHOW_ATTRIBUTE.innerHTML = `${plus_sign(this.value)}`;
    ATTRIBUTE_INPUT = parseInt(this.value);
};

/* proficiency */
let PROFICIENCY = document.querySelector('#dnd-proficiency');
const SHOW_PROFICIENCY = document.querySelector('#dnd-proficiency-exhibitor');
let PROFICIENCY_INPUT = 0;
PROFICIENCY.oninput = function() {
    SHOW_PROFICIENCY.innerHTML = `${plus_sign(this.value)}`;
    PROFICIENCY_INPUT = parseInt(this.value);
};

/* proficiency */
let OTHERMODS = document.querySelector('#dnd-othermods');
const SHOW_OTHERMODS = document.querySelector('#dnd-othermods-exhibitor');
let OTHERMODS_INPUT = 0;
OTHERMODS.oninput = function() {
    SHOW_OTHERMODS.innerHTML = `${plus_sign(this.value)}`;
    OTHERMODS_INPUT = parseInt(this.value);
};

/* variants */
const ADVANTAGE = document.querySelector('#dnd-advantage');
const DISADVANTAGE = document.querySelector('#dnd-disadvantage');


/* roll the dice */
function rolld20() {
    return Math.round(Math.random() * (20 - 1) + 1);
}

const BTN_D20 = document.querySelector('#btn-dnd-d20');
const LOG = document.querySelector('#js-dnd-log');

let MODIFIERS_CHECK = (ATTRIBUTE_INPUT != 0 && PROFICIENCY_INPUT != 0 && OTHERMODS_INPUT != 0) ? true : false;


BTN_D20.addEventListener('click', () => {
    let dice1 = rolld20();
    let dice2 = rolld20();
    let higher_dice = (dice1 >= dice2) ? dice1 : dice2;
    let lower_dice = (dice1 <= dice2) ? dice1 : dice2;
    let operation = ATTRIBUTE_INPUT + PROFICIENCY_INPUT + OTHERMODS_INPUT;

       if (ADVANTAGE.checked === true) {
        return LOG.innerHTML=`Rolou ${dice1} e ${dice2}. Com vantagem, prevaleceu ${higher_dice}. Após modificadores, o resultado é ${higher_dice + operation}.`;
       }

       if (DISADVANTAGE.checked === true) {
        return LOG.innerHTML=`Rolou ${dice1} e ${dice2}. Com desvatangem, prevaleceu ${lower_dice}. Após modificadores, o resultado é ${lower_dice + operation}.`;
       }

    LOG.innerHTML=`Rolou ${dice1}.`
    /* não está funcionando ainda */
    if (MODIFIERS_CHECK === false) {
        LOG.innerHTML+=`&nbsp;Com modificadores, o resultado é ${dice1 + operation}.`;
    };
});