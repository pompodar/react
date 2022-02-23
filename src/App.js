import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './About';
const name = 'Svjat';
const surName = 'K.';

let x = false;

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header  />
      <Routes>
        <Route path="/" exact render={(props) => (
          <>
            { 1 + 1 }
            {x ? name : surName  }
          </>
        )}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
