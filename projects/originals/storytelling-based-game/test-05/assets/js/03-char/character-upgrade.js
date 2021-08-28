/** AUMENTO DE ATRIBUTOS! FASE DE TESTE! **/
const ATTRIBUTES_DESCRIPTIONS = document.querySelector('#js-character-sheet-upgrade-attributes');
ATTRIBUTES_DESCRIPTIONS.innerHTML = `
    ${attr_strength.icon}
    ${attr_strength.name}
    ${attr_strength.description}
    ${attr_strength.details}
`

const APERTA = document.querySelector('#testei');
APERTA.addEventListener('click', () => {
    if (character_str < 5 && character_exp >= leveling_req[character_str]) {
    return upSkill(character.attributes.strength++);}
});

function upSkill() {
    updateAllSheetDisplay();
    showAttributes();
}
