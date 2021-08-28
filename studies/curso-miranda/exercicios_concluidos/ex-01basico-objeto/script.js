function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('#resultado');
    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.nodeValue,
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        });

        return resultado.innerHTML += `
        <p>O nome é ${nome.value}, o sobrenome é ${sobrenome.value}, o peso é ${peso.value} e a altura é ${altura.value}.</p>
        `;
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
