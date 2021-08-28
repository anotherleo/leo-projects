const TIMESTAMP = new Date();
const TIMESTAMP_DAY = TIMESTAMP.getDate();
const TIMESTAMP_WEEK = TIMESTAMP.getDay();
const TIMESTAMP_WEEK_NAME = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const TIMESTAMP_WEEK_NAME_SHORT = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const TIMESTAMP_MONTH = TIMESTAMP.getMonth();
const TIMESTAMP_MONTH_NAME = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const TIMESTAMP_MONTH_NUMBER = TIMESTAMP.getMonth() + 1;
const TIMESTAMP_YEAR = TIMESTAMP.getFullYear();
const TIMESTAMP_HOURS = TIMESTAMP.getHours();
const TIMESTAMP_MINS = TIMESTAMP.getMinutes();

function zeroOnDate(number) {
    // insere um 0 se o número for menor que dez, mas o torna uma string.
    return number >= 10 ? number : `0${number}`;
}

function simpleClock() {
    // HORAS : MINUTOS
    return `${zeroOnDate(TIMESTAMP_HOURS)}:${zeroOnDate(TIMESTAMP_MINS)}`;
}

function dayExtense() {
    // dia da semana, dia tal do mês tal do ano tal.
    return `${TIMESTAMP_WEEK_NAME_SHORT[TIMESTAMP_WEEK]}, ${TIMESTAMP_DAY} de ${TIMESTAMP_MONTH_NAME[TIMESTAMP_MONTH]} de ${TIMESTAMP_YEAR}.`;
}

function daySlash() {
    // dia mês e ano, separados por /.
    return `${TIMESTAMP_DAY}/${zeroOnDate(TIMESTAMP_MONTH_NUMBER)}/${TIMESTAMP_YEAR}`;
}

const CLOCK = document.querySelector('#js-clock');
CLOCK.innerHTML=`${simpleClock()}`;

const CLOCK_DATE = document.querySelector('#js-clock-date');
CLOCK_DATE.innerHTML=`${dayExtense()}`;

const CLOCK_SLASH = document.querySelector('#js-clock-slash');
CLOCK_SLASH.innerHTML=`${daySlash()}`;


/* Second Option, using native resource */
const CLOCK_FULL = document.querySelector('#js-clock-full');
function autoDateClock() {
    return `${TIMESTAMP.toLocaleDateString('pt-BR', { dateStyle: 'full' })}`;
}
CLOCK_FULL.innerHTML=`${autoDateClock()}`;