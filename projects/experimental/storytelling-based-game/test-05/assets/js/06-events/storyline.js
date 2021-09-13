console.log('oi')

// Gender Settings
gender = {
    male: {
        name: 'Masculino',
        P: `Ele`,
        p: `ele`,
        A: `O`,
        a: `o`,
    },
    female: {
        name: 'Feminino',
        P: `Ela`,
        p: `ela`,
        A: `A`,
        a: `a`
    }
};

let g = '';
let Ug = '';
let a = '';
let Ua = '';

// DOM
const STORYLINE_CONTENTS = document.querySelector('#js-storyline-contents');

// Conteúdo
function chapter01a() {
    return STORYLINE_CONTENTS.innerHTML = `
        <article class="js-story">
            <h1>CAPÍTULO 1
            <br>Uma velha história de guerra...</h1>
            <p>Talvez houvesse tempo para relembrar, mas não há. Questionam <em>"segurança ou privacidade?"</em>, mas eles não tem ideia do que realmente está acontecendo. Todas as guerras do mundo moderno escondem a verdadeira batalha pela sobrevivência...</p>
            <p>Magia é real.</p>
            <p>Alex sabe disso.</p>
            <p>A magia pulsa em suas veias, em seus olhos, no ar...</p>
            <p>Mas Alex não sabe se consegue sobreviver à si no meio dessa caça insana pela sua cabeça -- o mero fato de existir ameaça o mundo.</p>
            <div class="js-choices2">
                <button onclick="genderGirl()">Alex é só uma garota.</button>
                <button onclick="genderBoy()">Alex é só um garoto.</button>
            </div>
        </article>
    `
}

function genderBoy() {
    character.gender = gender.male;
    g = gender.male.p;
    Ug = gender.male.P;
    Ua = gender.male.A;
    a = gender.male.a;
    return chapter01b();
};

function genderGirl() {
    character.gender = gender.female;
    g = gender.female.p;
    Ug = gender.female.P;
    Ua = gender.female.A;
    a = gender.female.a;
    return chapter01b();
};

function chapter01b() {
    
    return STORYLINE_CONTENTS.innerHTML = `
        <article class="js-story">
            <h1>Uma velha história de guerra...</h1>
            <p>Enquanto criança, seu avô contava histórias para ${g}. O velho dizia que desde que o mundo era mundo, desde que o tempo existia, os magos caminhavam sobre a terra. Eles eram poderosos, mudavam o mundo com as mãos, com o poder de um desejo, um pensamento...</p>
            <p>Os magos também causavam medo. As pessoas caçaram os magos, que se esconderam das sociedades, agindo e existindo sem o conhecimento das pessoas... Mas conforme o tempo passou e as tradições se perderam, a magia também se tornou rara e difícil. A ambição levou os magos à destruição.</p>
            <p>Seu avô dizia que um dia o mundo redescobriria a magia.</p>
            <p>Alex lembrava das histórias, mas agora conseguia refletir.</p>
            <div class="js-choices2">
                <button onclick="addFirstTrait(trait_05)">Ele falava de um mundo idealista demais.</button>
                <button onclick="addFirstTrait(trait_04)">Era bom sonhar com um mundo fantástico.</button>
            </div>
        </article>
    `;
}

function addFirstTrait(trait) {
    character.traits.push(trait);
    updateAllSheetDisplay();
    showTraits();
    return chapter01c();
}

function chapter01c() {
    return STORYLINE_CONTENTS.innerHTML = `
        <article class="js-story">
            <h1>Uma velha história de guerra...</h1>
            <p class="notfeature">Alex tem o traço ${character.traits.includes(trait_04) ? `Visionário` : `Realista`}.</p>
            <p>Alex pensava consigo mesm${a}: <em>"${character.traits.includes(trait_04) ? `meu avô era sábio por ter esparança em um mundo melhor, e eu vou fazer o mesmo, eu vou deixar o mundo melhor... Eu vou sobreviver.` : `não existe sentido nessas histórias, mas talvez exista alguma pista sobre como lidar com toda essa desgraça...`}"</em></p>
            <p></p>
            <div class="js-choices1">
                <button onclick="chapter01end()">Alex precisava fazer algo sobre isso.</button>
            </div>
        </article>
    `;
}

function chapter01end() {
    return STORYLINE_CONTENTS.innerHTML = `
        quest...
    `;
}

// Story Starts
chapter01a();

