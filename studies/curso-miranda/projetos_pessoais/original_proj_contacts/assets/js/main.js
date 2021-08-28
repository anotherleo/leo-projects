const FORM = document.querySelector('#js-form-contact');
let INPUT_NAME = document.querySelector('#js-input-name');
let INPUT_CELL = document.querySelector('#js-input-cell');
let INPUT_BIRTH = document.querySelector('#js-input-birth');
let INPUT_EMAIL = document.querySelector('#js-input-email');
let INPUT_NOTES = document.querySelector('#js-input-notes');
let CONTAINER_CARDS = document.querySelector('#js-container-cards');

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    return createCard();
})

let everybody = [];

function createCard() {
    let name = INPUT_NAME.value;
    let cell = INPUT_CELL.value;
    let birth = INPUT_BIRTH.value;
    let email = INPUT_EMAIL.value;
    let notes = INPUT_NOTES.value;

    everybody += [name, cell, birth, email, notes];
    console.log(name, everybody);

    return CONTAINER_CARDS.innerHTML+=`
    <article class="contact-card">
        <h4><i class="fas fa-user-alt"></i> ${name}</h4>
        <div class="form-two-on-row">
            <h5><i class="fas fa-phone-alt"></i> ${cell}</h5>
            <h5><i class="fas fa-birthday-cake"></i> ${birth}</h5>
        </div>
        <h5 class="e"><i class="fas fa-at"></i> ${email}</h5>
        <h6><i class="fas fa-book"></i> ${notes}</h6>
        <hr>
    </article>`;
}