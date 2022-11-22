import './App.css';
import Aside from './components/Aside';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Banner 
        title="A Jornada"
        subtitle="Regra alternativa para customização em níveis épicos"
      />
      <div className="container">
        <div className="row">
          <Aside />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
