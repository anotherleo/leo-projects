// variables from other script:
// -- LOG

// DOM objects
let health_meter = document.querySelector('#js-sheet-health-meter');
let health_number_exhibitor = document.querySelector('#js-sheet-health-number');
const HEAL_BTN = document.querySelector('#js-sheet-health-plus');
const DMG_BTN = document.querySelector('#js-sheet-health-minus');

// default exhibition
health_number_exhibitor.innerHTML=`${String(health_meter.value)}`;

// healing button and function
HEAL_BTN.addEventListener('click', () => {
    return healHealth();
})
function healHealth() {
    let i = Number(prompt('Digite a cura:'));
    let j = Number(health_meter.value);
    let limit = Number(health_meter.max);
    console.log(limit);
    let newlife = i+j;

    newlife >= limit ? health_meter.value = newlife : health_meter.value = limit;    

    LOG.innerHTML+=`<p>Healed ${i} life points. Now has a total of ${health_meter.value} life points.</p>`
    return health_number_exhibitor.innerHTML=`${String(health_meter.value)}`;
};

// damaging button and function
DMG_BTN.addEventListener('click', () => {
    return damageHealth();
})
function damageHealth() {
    let i = Number(prompt('Digite o dano:'));
    let j = Number(health_meter.value);
    let newlife = j-i;
    let deathlimit = Number(-(health_meter.max));

    if (newlife > deathlimit) {
        health_meter.value = newlife;
        LOG.innerHTML+=`<p>Has sustained ${i} damage. Now has a total of ${newlife} life points.</p>`
        return health_number_exhibitor.innerHTML=`${String(health_meter.value)}`;
    } else {
        health_meter.value = 0;
        LOG.innerHTML+=`<p>Has took ${i} damage, with a brutal ${newlife} toll on their life limit. The character is deceased.</p>`
        return health_number_exhibitor.innerHTML=`DECEASED`;
    }
};