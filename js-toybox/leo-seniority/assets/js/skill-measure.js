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
let htmlChecksHigh = HTML_SKILL.getElementsByClassName('js-advance:checked').length;

function htmlSkillCounter() {
    HTML_METER.max = htmlSkill;
    HTML_METER.value = htmlChecks;
    HTML_NUMBER.innerHTML=`${percent(htmlChecks, htmlSkill)}`;

    HTML_METER_HIGH.max = htmlSkillHigh;
    HTML_METER_HIGH.value = htmlChecksHigh;
    HTML_NUMBER_HIGH.innerHTML=`${percent(htmlChecksHigh, htmlSkillHigh)}`;
}

/* variables CSS */
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

/* run */
htmlSkillCounter();
cssSkillCounter();