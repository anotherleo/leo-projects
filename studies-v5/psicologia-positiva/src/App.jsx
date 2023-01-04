import './styles/bootstrap-grid.css'
import { GlobalStyle } from "./components/GlobalStyle";
import { TraitCard } from './components/TraitCard';
import { StyledProgress } from './components/StyledProgress';
import { StyledHeader } from './components/Header';
import traits from './data/traits.json'
import { CardsContainer } from './components/CardsContainer';

function App() {
	return (
		<div className="App">

			<GlobalStyle />

			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<StyledHeader>
							<h1>Psicologia Positiva</h1>
							<p>De acordo com um curso recente, seria interessante listar os traços de caráter, a título de auto-conhecimento.</p>
							<p>Decidi fazer no começo de 2023 para comparar minha auto-percepção ao longo do tempo.</p>
						</StyledHeader>
					</div>

					<div className="offset-md-1 col-md-4">
						<CardsContainer>
							{
								traits.map((trait) => {
									return (
										<TraitCard>
											<div className='row'>
												<div className='col-6'>
													<span className='title'>{trait.title}</span>
												</div>
												<div className='col-6'>
													<StyledProgress value={trait.score} max="5"></StyledProgress>
													<span className='number'>{trait.score}</span>
												</div>
											</div>
										</TraitCard>
									)
								})
							}
						</CardsContainer>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
