import Card from '../Card';
import './Main.css';
import nix from './Nix.png';
import brum from './Brumhild.png';
import kara from './Kara.png';

export default function Main() {
    return(
        <main className="col-md-6">
            <div className="main__text">
                <h2>Resumo</h2>
                <p>A Jornada serve para personagens com fichas de décimo nível ou acima. Ela serve para adicionar pontos extras de atributos à ficha, anotar os traços sociais que os personagens receberam por suas aventuras, proficiências desenvolvidas, e adicionar quaisquer traços novos que apresentem vantagens, desvantagens ou modificadores que o personagem tenha.</p>
                
                <h2>Contexto</h2>
                <p>Nós tivemos algumas razões para desenvolver essa regra. A primeira delas foi: nosso grupo era duas pessoas, e sendo assim, era melhor jogar com poucos personagens poderosos do que controlar muitos outros. O segundo motivo foi que a jornada de alguns personagens, pois haviam percorrido aventuras que garantiam características especiais, mas que não eram exatamente um talento ou uma vantagem de antecedente.</p>
                
                <h2>Exemplos</h2>
                <div className="row">
                    <Card
                        anchor="#nix"
                        image={nix}
                        name="Nix"
                        subtitle="Viajante Planar"
                    />
                    <Card
                        anchor="#kara"
                        image={kara}
                        name="Kara"
                        subtitle="Acadêmica Rebelde"
                    />
                    <Card
                        anchor="#brumhild"
                        image={brum}
                        name="Brumhild"
                        subtitle="Rainha do Norte"
                    />
                </div>
            </div>
        </main>
    )
}