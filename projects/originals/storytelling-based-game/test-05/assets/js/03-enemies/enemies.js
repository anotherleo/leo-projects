// exclusive functions
function rollMoney(max, min) {
    return Math.round(Math.random() * (max - min) + min);
};

// enemy list
let enemy_radical_01 = {
    name: 'Vigilante Fundamentalista',
    description: 'Um homem de meia idade, vestido em roupas pesadas de fábrica, tem um martelo na mão e repete em sussurros "esses monstros malditos..."',
    experience: 10,
    attributes: { 
        strength: 2, 
        healthpoints: 15, 
    },
    loot: {
        money: rollMoney(5,50),
        inventory: []
    }
}