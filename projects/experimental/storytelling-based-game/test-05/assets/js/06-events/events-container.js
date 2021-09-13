// time flux
function nextDay() {
    days_passed++;
    timestamp.setMilliseconds(86400000);
    console.log(days_passed, timestamp);
    updateClockDisplay();
    updateStatistics();
    timeBasedEvents();
    displayTodayEvents();
    return updateDayEventDisplay();
}

// tab
const WORLD_EVENTS_DISPLAY = document.querySelector('#js-world-challenges-list');

// lista de eventos
let world_event_01 = {
    id: 'world_event_01',
    name: 'Vigilantes Fundamentalistas',
    description: 'Cada vez mais os cidadãos de bem acreditam que podem fazer justiça com as próprias mãos de acordo com seus ideais: a caça às bruxas retornou.',
    icon: '<i class="fas fa-cross"></i>',
    location: city_d_01,
    challenge: `<div>
        <button onclick="challenge01start()">Combate</button>
        <button onclick="">Espionagem</button>
    </div>
    `,
};
let world_event_02 = {
    id: 'world_event_02',
    name: 'Sombra Materializada',
    description: 'Desde que a Guerra começou, os seres que habitam o Vazio tem atravessado por brechas que ninguém nota.',
    icon: '<i class="fas fa-disease"></i>',
    location: city_d_02,
    challenge: `<div>
        <button onclick="">Combate</button>
    </div>
    `,
};

// function sortTodayEvents() {
//     let i = rolld6();
//     let events = [];
//     i >=3 ? events += event_combat_01 : events += event_combat_01;
//     return today_events = events;
// }

let today_events = [world_event_01]
function timeBasedEvents() {
    if (days_passed % 2 == 0) {
        return today_events.push(world_event_01);
    } else {
        return today_events.push(world_event_02);
    }
};

// Padrão para mostrar o evento
function displayTodayEvents() {
    for (i = 0; i < today_events.length; i++) {
        WORLD_EVENTS_DISPLAY.innerHTML+=`
        <article id="${today_events[i].id}" class="js-event">
        <h4>${today_events[i].icon}&nbsp;${today_events[i].name}</h4>        
        <p>${today_events[i].description}</p>
        <p class="m"><i class="fas fa-map-marker-alt"></i>&nbsp;${today_events[i].location}</p>
        ${today_events[i].challenge}
        <hr>
        </article>`
    }
};

// sortTodayEvents();
displayTodayEvents(); // auto show the sorted events