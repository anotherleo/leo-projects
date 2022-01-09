/* general operations */
function percent(a, b) {
    return ((a/b) * 100).toFixed(1) + '%';
}

/* HTML */
const HTML_SKILL = document.querySelector('#js-skill-html-checklist');

const HTML_METER = document.querySelector('#js-skill-html-meter');
const HTML_NUMBER = document.querySelector('#js-skill-html-number');
let htmlSkill = HTML_SKILL.getElementsByTagName("li").length;
let htmlChecks = HTML_SKILL.querySelectorAll('input[type="checkbox"]:checked').length;

const HTML_METER_HIGH = document.querySelector('#js-skill-html-meter-high');
const HTML_NUMBER_HIGH = document.querySelector('#js-skill-html-number-high');
let htmlSkillHigh = HTML_SKILL.getElementsByClassName("js-high").length;
let htmlChecksHigh = HTML_SKILL.querySelectorAll('input[type="checkbox"].js-advance:checked').length;

function htmlSkillCounter() {
    HTML_METER.max = htmlSkill;
    HTML_METER.value = htmlChecks;
    HTML_NUMBER.innerHTML=`${percent(htmlChecks, htmlSkill)}`;

    HTML_METER_HIGH.max = htmlSkillHigh;
    HTML_METER_HIGH.value = htmlChecksHigh;
    HTML_NUMBER_HIGH.innerHTML=`${percent(htmlChecksHigh, htmlSkillHigh)}`;
}

/* CSS */
const CSS_SKILL = document.querySelector('#js-skill-css-checklist');

const CSS_METER = document.querySelector('#js-skill-css-meter');
const CSS_NUMBER = document.querySelector('#js-skill-css-number');
let cssSkill = CSS_SKILL.getElementsByTagName("li").length;
let cssChecks = CSS_SKILL.querySelectorAll('input[type="checkbox"]:checked').length;

const CSS_METER_HIGH = document.querySelector('#js-skill-css-meter-high');
const CSS_NUMBER_HIGH = document.querySelector('#js-skill-css-number-high');
let cssSkillHigh = CSS_SKILL.getElementsByClassName('js-high').length;
let cssChecksHigh = CSS_SKILL.querySelectorAll('input[type="checkbox"].js-advance:checked').length;

function cssSkillCounter() {
    CSS_METER.max = cssSkill;
    CSS_METER.value = cssChecks;
    CSS_NUMBER.innerHTML=`${percent(cssChecks, cssSkill)}`;

    CSS_METER_HIGH.max = cssSkillHigh;
    CSS_METER_HIGH.value = cssChecksHigh;
    CSS_NUMBER_HIGH.innerHTML=`${percent(cssChecksHigh, cssSkillHigh)}`;
}


/* JS */
const JS_SKILL = document.querySelector('#js-skill-js-checklist');

const JS_METER = document.querySelector('#js-skill-js-meter');
const JS_NUMBER = document.querySelector('#js-skill-js-number');
let jsSkill = JS_SKILL.getElementsByTagName("li").length;
let jsChecks = JS_SKILL.querySelectorAll('input[type="checkbox"]:checked').length;

const JS_METER_HIGH = document.querySelector('#js-skill-js-meter-high');
const JS_NUMBER_HIGH = document.querySelector('#js-skill-js-number-high');
let jsSkillHigh = JS_SKILL.getElementsByClassName('js-high').length;
let jsChecksHigh = JS_SKILL.querySelectorAll('input[type="checkbox"].js-advance:checked').length;

function jsSkillCounter() {
    JS_METER.max = jsSkill;
    JS_METER.value = jsChecks;
    JS_NUMBER.innerHTML=`${percent(jsChecks, jsSkill)}`;

    JS_METER_HIGH.max = jsSkillHigh;
    JS_METER_HIGH.value = jsChecksHigh;
    JS_NUMBER_HIGH.innerHTML=`${percent(jsChecksHigh, jsSkillHigh)}`;
}

/* run */
htmlSkillCounter();
cssSkillCounter();
jsSkillCounter();