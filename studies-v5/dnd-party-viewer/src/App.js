import Banner from './components/Banner';
import Footer from './components/Footer';
import CharForm from './components/CharForm';
import { useState } from 'react';
import Team from './components/Team';

function App() {

  const teams = [
    {
      nome: 'Tarrasque',
      corPrimaria: '',
      corSecundaria: 'rgb(219, 133, 133)',
      image: 'https://5e.tools/img/MM/Tarrasque.png',
    },
    {
      nome: 'Demogorgon',
      corPrimaria: '',
      corSecundaria: 'rgb(240, 201, 129)',
      image: 'https://5e.tools/img/MTF/Demogorgon.png',
    },
    {
      nome: 'Dragão Azul Ancião',
      corPrimaria: '',
      corSecundaria: 'lightblue',
      image: 'https://5e.tools/img/MM/Ancient%20Blue%20Dragon.png',
    },
    {
      nome: 'Balor',
      corPrimaria: '',
      corSecundaria: 'rgb(181, 237, 181)',
      image: 'https://5e.tools/img/MM/Balor.png',
    },
    {
      nome: 'Guerreiro Vampiro',
      corPrimaria: '',
      corSecundaria: 'lightgray',
      image: 'https://5e.tools/img/MM/Vampire%20Warrior.png',
    }
  ]

  const [personagens, setPersonagens] = useState([]);

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem]);
  }

  return (
    <div className="App">
      <Banner />
      <CharForm teams={teams.map(time => time.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)} />
      
      {teams.map(time => 
        <Team key={time.name} 
          nome={time.nome}
          image={time.image}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          personagens={personagens.filter(personagem => personagem.teams === time.nome)}
        /> 
      )}
      <Footer />
    </div>
  );
}

export default App;
