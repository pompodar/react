import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
const name = 'Svjat';
const surName = 'K.';

let x = false;

function App() {
  return (
    <div className="App">
      <Header  />
      { 1 + 1 }
      {x ? name : surName  }
      <Footer />
    </div>
  );
}

export default App;
