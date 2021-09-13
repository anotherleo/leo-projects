// base character
let character = { 
    name: 'Alex', 
    icon: '<i class="fas fa-user"></i>',
    gender: '',
    level: 1,
    experience: 0,
    traditions: [ tradition_01, tradition_02, tradition_03 ],
    traits: [],
    attributes: { 
        healthpoints: 0,
        mana: 0,
        strength: 3,
        dexterity: 2,
        agility: 1,
        willpower: 2,
        imagination: 1,
        manipulation: 2,
        intelligence: 1,
        charisma: 2,
        wisdom: 1,
        perception: 2,
        stamina: 2,
        presence: 1
    },
    loot: {
        money: 0,
        inventory: []
    }
};

// character math
    /* altera direto no objeto... */
function healthpointsMath() {
    return character.attributes.healthpoints = (3 * character.attributes.stamina) + (2 * character.attributes.strength) + (1 * character.attributes.agility);}
healthpointsMath();

function updateAllMaths() {
    healthpointsMath();
}

// variables to manipulate everywhere else
let character_name = character.name;
let character_icon = character.icon;
let character_atk = character.attributes.strength;
let character_exp = character.experience;
let character_lv = character.level;
let character_traits = character.traits;
let character_hp = character.attributes.healthpoints;
let character_mp = character.attributes.mana;
let character_str = character.attributes.strength;
let character_dex = character.attributes.dexterity;
let character_agi = character.attributes.agility;
let character_wil = character.attributes.willpower;
let character_ima = character.attributes.imagination;
let character_man = character.attributes.manipulation;
let character_int = character.attributes.intelligence;
let character_cha = character.attributes.charisma;
let character_wis = character.attributes.wisdom;
let character_per = character.attributes.perception;
let character_sta = character.attributes.stamina;
let character_pre = character.attributes.presence;

// roda TODAS as funções.
function updateAllSheetDisplay() {
    updateAllMaths();
    character_name = character.name;
    character_icon = character.icon;
    character_atk = character.attributes.strength;
    character_exp = character.experience;
    character_lv = character.level;
    character_traits = character.traits;
    character_hp = character.attributes.healthpoints;
    character_mp = character.attributes.mana;
    character_str = character.attributes.strength;
    character_dex = character.attributes.dexterity;
    character_agi = character.attributes.agility;
    character_wil = character.attributes.willpower;
    character_ima = character.attributes.imagination;
    character_man = character.attributes.manipulation;
    character_int = character.attributes.intelligence;
    character_cha = character.attributes.charisma;
    character_wis = character.attributes.wisdom;
    character_per = character.attributes.perception;
    character_sta = character.attributes.stamina;
    character_pre = character.attributes.presence;
}