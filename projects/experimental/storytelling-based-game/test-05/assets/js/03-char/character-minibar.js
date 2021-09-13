            /* Notes */
    /* Ver 'style-minibar.css' */

const MINIBAR_DISPLAY = document.querySelector('#js-header-character-minibar');

function displayMinibar() {
    return MINIBAR_DISPLAY.innerHTML = `
    <figure class="minibar-char-icon">${character_icon}</figure>
    <div class="minibar-char-name">${character_name}</div>
    <div id="" class="minibar-incomplete"></div>
    <div class="minibar-char-level">LV. ${character_lv}</div>
    `
}

displayMinibar();