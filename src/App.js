import './App.css';
const name = 'Svjat';
const surName = 'K.';

let x = false;

function App() {
  return (
    <div className="App">
      { 1 + 1 }
      {x ? name : surName  }
    </div>
  );
}

export default App;
