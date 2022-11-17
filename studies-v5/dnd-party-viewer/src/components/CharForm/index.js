import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import './Form.css';

function CharForm() {

    const classesList = [
        'Artífice',
        'Bárbaro',
        'Bardo',
        'Bruxo',
        'Clérigo',
        'Druida',
        'Feiticeiro',
        'Guerreiro',
        'Ladino',
        'Mago',
        'Monge',
        'Paladino',
        'Patrulheiro'
    ]

    const bossTeams = [
        'Tarrasque',
        'Demogorgon',
        'Dragão Azul Ancião',
        'Balor',
        'Guerreiro Vampiro'
    ];

    const onSave = (e) => {
        e.preventDefault();
        console.log('form submetido');
    }

    return (
        <div className="page__form">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={onSave}>
                            <h2>Preencha o card abaixo para criar um personagem:</h2>
                            <Input label="Nome" placeholder="Digite o nome" />
                            <Input label="Nível" placeholder="Determine o nível" />
                            <div className="row">
                                <div className="col-md-6">
                                    <Select label="Classe" itens={classesList} />
                                </div>
                                <div className="col-md-6">
                                    <Select label="Desafio de Chefe" itens={bossTeams} />
                                </div>
                            </div>
                            <Input label="Raça e Antecedente" placeholder="Digite a raça e antecedente" />
                            <Input label="Imagem" placeholder="Digite a URL da imagem" />
                            <Button>
                                Criar Card
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharForm;