                    /* Notes */
        /* DEPENDS of functions in 'clock.js' */
        /* the function nextDay() is in 'events-container.js */

// clock setup
let days_passed = 0; // counter where the some events will be based later on + STATISTIC.

const DISPLAY_HOUSE_CALENDAR = document.querySelector('#js-house-calendar');
DISPLAY_HOUSE_CALENDAR.innerHTML = `${autoDateClock()}`; // display the date by default

function updateClockDisplay() { // reloads the default clock with the new date.
    DISPLAY_HOUSE_CALENDAR.innerHTML = `${autoDateClock()}`;
};

// events setup
const DAY_EVENTS_DISPLAY = document.querySelector('#js-house-dayevents');

DAY_EVENTS_DISPLAY.innerHTML = `${eventDayDisplay()}`;

function eventDayDisplay() {
    return eventDayOrdinary();
};

function updateDayEventDisplay() { // reloads the default event.
    DAY_EVENTS_DISPLAY.innerHTML = `${eventDayDisplay()}`;
};

const BTN_NEXTDAY = document.querySelector('#js-btn-house-nextday');
BTN_NEXTDAY.addEventListener('click', () => {
    return nextDay();
});

// events stuff
