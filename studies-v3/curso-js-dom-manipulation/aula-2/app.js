// DOM Manipulation

// Styling Elements
const title = document.querySelector('#main-heading');
console.log(title);

title.style.color = 'white';
title.style.fontSize = '44px';
title.style.backgroundColor = 'black';
title.style.padding = '10px 15px';
title.style.textAlign = 'center';

const container = document.querySelector('.container');
console.log(container);

container.style.border = '1px solid gainsboro';

const listItems = document.querySelectorAll('.list-items');
console.log(listItems);

for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '18px';
    listItems[i].style.margin = '5px';
    listItems[i].style.padding = '5px';
    listItems[i].style.border = '1px solid gray';
}

// Creating Elements
const list = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements
list.append(li);

// Modifying the Texts
const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

li.innerText = 'X-men';

// Modifying Attributes & Classes
li.setAttribute('id', 'list-item--special');
document.getElementById('list-item--special').style.color = 'blue';
li.removeAttribute('id');

console.log(title.getAttribute('id'));

li.classList.add('list-items');
li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));

// Remove Elements
li.remove();