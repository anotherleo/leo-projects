/* variables */
const HTML_SKILL = document.querySelector('#js-skill-html-checklist');

const HTML_METER = document.querySelector('#js-skill-html-meter');
const HTML_NUMBER = document.querySelector('#js-skill-html-number');
let htmlSkill = HTML_SKILL.getElementsByTagName("li").length;
let htmlChecks = HTML_SKILL.querySelectorAll('input[type="checkbox"]:checked').length;

const HTML_METER_HIGH = document.querySelector('#js-skill-html-meter-high');
const HTML_NUMBER_HIGH = document.querySelector('#js-skill-html-number-high');
let htmlSkillHigh = HTML_SKILL.getElementsByClassName("js-high").length;
let htmlChecksHigh = HTML_SKILL.querySelectorAll('input[type="checkbox"].advance:checked').length;

console.log(htmlSkill, htmlChecks, htmlSkillHigh, htmlChecksHigh)

/* general operations */
function percent(a, b) {
    return ((a/b) * 100).toFixed(1) + '%';
}

/* individual calcs */
function htmlSkillCounter() {
    HTML_METER.max = htmlSkill;
    HTML_METER.value = htmlChecks;
    HTML_NUMBER.innerHTML=`${percent(htmlChecks, htmlSkill)}`;

    HTML_METER_HIGH.max = htmlSkillHigh;
    HTML_METER_HIGH.value = htmlChecksHigh;
    HTML_NUMBER_HIGH.innerHTML=`${percent(htmlChecksHigh, htmlSkillHigh)}`;
}


/* run */
htmlSkillCounter();