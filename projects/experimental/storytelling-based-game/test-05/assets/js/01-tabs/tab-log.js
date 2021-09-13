const LOG_SUBTABS = document.getElementsByClassName('js-log-subtab');

const SUBTAB_JOURNAL = document.querySelector('#js-log-subtab-journal');
const BTN_SUBTAB_JOURNAL = document.querySelector('#js-log-subtab-btn-journal');
const SUBTAB_STATISTIC = document.querySelector('#js-log-subtab-statistics');
const BTN_SUBTAB_STATISTIC = document.querySelector('#js-log-subtab-btn-statistics');

function hideAllLogSubtabs() {
    for (let i = 0; i < LOG_SUBTABS.length; i++) {
        LOG_SUBTABS[i].style.display = 'none';
    }
};

hideAllLogSubtabs(); // hide the subtabs by default
SUBTAB_JOURNAL.style.display = 'block'; // show this tab by default

BTN_SUBTAB_JOURNAL.addEventListener('click', () => {
    hideAllLogSubtabs();
    SUBTAB_JOURNAL.style.display = 'block';
});

BTN_SUBTAB_STATISTIC.addEventListener('click', () => {
    hideAllLogSubtabs();
    SUBTAB_STATISTIC.style.display = 'block';
});