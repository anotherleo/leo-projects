import data from './veronika.json'
import styles from './character.module.scss'

function App() {
  return (
    <>
    {
      data.map((character) => {
        return <div key={character.name} className={styles.container}>
          <img src={character.image} alt={character.name} className={styles.cover} />
          <h1>{character.name}</h1>
          <p>{`${2021 - character.born} anos | ${character.astrology}`}</p>
          <p>{`Conceito: ${character.concept}`}</p>
          <p>{`Habilidades: ${character.skills.join(', ')}`}</p>
          <p>{`Características: ${character.traits.join(', ')}`}</p>
          <p>{`Antecedentes: ${character.background.join(', ')}`}</p>
          {console.log(character.skills)}
        </div>
      })
    }
    </>
  );
}

export default App;
