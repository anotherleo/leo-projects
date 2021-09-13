                    /* Notes */
        /* USES variables of 'temporary-combat.js */
        /* DEPENDS of 'world_event_01' into 'events-container.js' */

function logCombat() {
    LOG_TEMPORARY_COMBAT.innerHTML += `
    <details>
    <summary>${smallDateClock()}, ${world_event_01.name}</summary>
    ${DISPLAY_TEMPORARY_COMBAT.innerHTML}
    </details>
    `
}

function excludeChallengeArticle() {
    // removes the HTML
    document.querySelector('#world_event_01').remove();

    // remove from the list, so it won't be show again until some function makes it happen.
    let i = today_events.indexOf(world_event_01);
    return today_events.splice(i, 1);
}

// base enemy
let enemy_challenge01 = enemy_radical_01;

// enemy math
    // roll() are defined in roll.js
let enemy_01_01_atk = enemy_challenge01.attributes.strength;

// enemy loot
let enemy_01_01_inv = enemy_challenge01.loot.inventory;

function challenge01start() {
    // reset contents of the tab
    DISPLAY_TEMPORARY_COMBAT.innerHTML=``;

    // show the tab
    hideAll();
    TAB_SPECIAL_TEMPORARY_CONFLICT.style.display = 'block';

    // basic
    let i = 0;
    let c_hp = character_hp;
    let e_hp = enemy_challenge01.attributes.healthpoints;

    // the description


    // the battle
    do {
        i++;
        let e_dmg = rolld3() + enemy_01_01_atk;
        c_hp-=e_dmg;
        let c_dmg = rolld6() + character_atk;
        e_hp-=c_dmg;
        DISPLAY_TEMPORARY_COMBAT.innerHTML+=`<p>Turno #${i}, ${character.name} sofreu ${e_dmg} dano de ${enemy_challenge01.name} e infligiu ${c_dmg} dano. Os pontos de vida de ${character.name} são ${c_hp} e ${enemy_challenge01.name} resiste em ${e_hp} pontos.</p>`;
    } while (c_hp > 0 && e_hp > 0);

    // the end
    function endCombat() {
        if (c_hp > e_hp) {
            DISPLAY_TEMPORARY_COMBAT.innerHTML+=`<p>${character.name} conseguiu uma vitória limpa. É um inimigo a menos para os magos dessa cidade.</p>`;

            experienceCalculation(enemy_challenge01.experience);

            DISPLAY_TEMPORARY_COMBAT.innerHTML+=`<p>Ganhou +${enemy_challenge01.experience} EXP, agora com total de ${character_exp} pontos.</p>`;

            let m = enemy_challenge01.loot.money;
            character.loot.money += m;
            DISPLAY_TEMPORARY_COMBAT.innerHTML+=`<p>Conseguiu ${m} D$ nos pertences de ${enemy_challenge01.name}, agora com total de ${character.loot.money} D$.</p>`;
            logCombat();
            excludeChallengeArticle();
        } else {
            DISPLAY_TEMPORARY_COMBAT.innerHTML+=`${enemy_challenge01.name} conseguiu sua vitória. ${character.name} morreu dolorosamente.`;
            gameOver();
        }
    }
    endCombat()
}

