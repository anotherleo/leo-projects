let timestamp = new Date(1338509600000); // fictional date of the game start

function autoDateClock() { // formats the date
    return `${timestamp.toLocaleDateString('pt-BR', { dateStyle: 'full' })}`;
};

function smallDateClock(){
    return `${timestamp.toLocaleDateString('pt-BR', { dateStyle: 'short' })}`;
}