import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import './Form.css';

function CharForm(props) {

    const [nome, setNome] = useState('Fainen');
    const [nivel, setNivel] = useState('20');
    const [raca, setRaca] = useState('Gnomo/Artesão');
    const [img, setImg] = useState('https...');
    const [classes, setClasses] = useState('Artífice');
    const [teams, setTeams] = useState('Tarrasque');

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
        props.aoPersonagemCadastrado({
            nome,
            nivel,
            classes,
            teams,
            raca,
            img
        })
    }

    return (
        <div className="page__form">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={onSave}>
                            <h2>Preencha o card abaixo para criar um personagem:</h2>
                            <Input 
                                label="Nome"
                                placeholder="Digite o nome"
                                valor={nome}
                                aoAlterado={valor => setNome(valor)}
                            />
                            <Input 
                                label="Nível"
                                placeholder="Determine o nível"
                                valor={nivel}
                                aoAlterado={valor => setNivel(valor)}
                            />
                            <div className="row">
                                <div className="col-md-6">
                                    <Select
                                        label="Classe"
                                        itens={classesList} 
                                        valor={classes}
                                        aoAlterado={valor => setClasses(valor)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Select
                                        label="Desafio de Chefe"
                                        itens={bossTeams}
                                        valor={teams}
                                        aoAlterado={valor => setTeams(valor)}
                                    />
                                </div>
                            </div>
                            <Input 
                                label="Raça e Antecedente"
                                placeholder="Digite a raça e antecedente"
                                valor={raca}
                                aoAlterado={valor => setRaca(valor)}
                            />
                            <Input 
                                label="Imagem"
                                placeholder="Digite a URL da imagem"
                                valor={img}
                                aoAlterado={valor => setImg(valor)}
                            />
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