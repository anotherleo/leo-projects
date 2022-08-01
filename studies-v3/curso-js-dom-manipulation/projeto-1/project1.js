// Variables

const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [{
    quote: `"Patience and time are my warriors, my champions."`,
    person: `Leo Tolstoy`
},{
    quote: `"Time is money."`,
    person: `Benjamin Franklin`
},{
    quote: `"Time waits for no one."`,
    person: `Folklore`
},{
    quote: `"Better three hours too soon than a minute too late."`,
    person: `William Shakespeare`
},{
    quote: `"Lost time is never found again."`,
    person: `Benjamin Franklin`
},{
    quote: `"Time is the most valuable thing a man can spend."`,
    person: `Theophrastus`
},{
    quote: `"Time is the wisest counselor of all."`,
    person: `Pericles`
},{
    quote: `"The key is in not spending time, but in investing it."`,
    person: `Stephen R. Covey`
},{
    quote: `"Punctuality is the thief of time."`,
    person: `Oscar Wilde`
},{
    quote: `"Nothing can harm you as much as your own thoughts unguarded."`,
    person: `Buddha`
},{
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
}]

btn.addEventListener('click', () => {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})