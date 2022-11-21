import './Team.css';
import Card from '../Card';

const Team = (props) => {
    return (
        <section className="page__team" 
            style={{ backgroundColor: props.corSecundaria }}>
            <div className="container">
                <div class="title">
                    <h3>{props.nome}</h3>
                    <img src={props.image} alt={props.nome} />
                </div>
                <div className="cards__wrapper">
                    {props.personagens.map(personagem => 
                        <Card nome={personagem.nome}
                        classes={personagem.classes}
                        level={personagem.nivel}
                        raca={personagem.raca}
                        img={personagem.img}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Team;