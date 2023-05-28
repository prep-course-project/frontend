import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element = {<About />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
