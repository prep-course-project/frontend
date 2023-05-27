import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';


function App() {
  return (
    <div className="App">
      <Routes>

      <Route path='/About' element = {<About />}/>
      
      </Routes>
     
    </div>
  );
}

export default App;
