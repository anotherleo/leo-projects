// DOM Manipulation

// Event Listeners

// element.addEventListener("click", function)

const button2 = document.querySelector('.btn-2');

function alertBtn() {
    alert('I Also Love JavaScript');
}

button2.addEventListener('click', alertBtn);

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);