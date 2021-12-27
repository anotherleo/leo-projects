/* variables */
const HTML_METER = document.querySelector('#js-skill-html-meter');
const HTML_NUMBER = document.querySelector('#js-skill-html-number');
const HTML_SKILL = document.querySelector('#js-skill-html-checklist');
let htmlSkill = HTML_SKILL.getElementsByTagName("li").length;
let htmlChecks = HTML_SKILL.querySelectorAll('input[type="checkbox"]:checked').length;

/* general operations */
function percent(a, b) {
    return ((a/b) * 100).toFixed(1) + '%';
}

/* individual calcs */
function htmlSkillCounter() {
    HTML_METER.max = htmlSkill;
    HTML_METER.value = htmlChecks;
    HTML_NUMBER.innerHTML=`${percent(htmlChecks, htmlSkill)}`;
}

/* run */
htmlSkillCounter();