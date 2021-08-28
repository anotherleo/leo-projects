// descriptions
let eventday_rainy = {
    description: 'Há um dia terrivelmente chuvoso lá fora, daqueles que quase causam enchentes na cidade.'
};
let eventday_houseproblem = {
    description: 'Haviam barulhos estranhos no teto...Eram pássaros, ratos ou espíritos?'
}

// random descriptions 
function eventDayOrdinary() {
    let i = rolld20();
    if (i >= 10) {return eventday_rainy.description}
    else {return eventday_houseproblem.description};
}