import Banner from './components/Banner';
import Footer from './components/Footer';
import CharForm from './components/CharForm';
import { useState } from 'react';

function App() {

  const [personagens, setPersonagens] = useState([]);

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem]);
  }

  return (
    <div className="App">
      <Banner />
      <CharForm aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)} />
      <Footer />
    </div>
  );
}

export default App;
