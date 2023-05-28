import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PropertyList from './pages/PropertyList/PropertyList';
import Favorite from './pages/Favorite/Favorite';
function App() {
  return (
    <div className="App">
      {/* comment from mohamad */}
      <Header/>
      <Routes>
      <Route path='/' element={<DetailsPage/>}/>
      <Route path='/propertyList' element ={<PropertyList/>}/>
      <Route path='/favorites' element={<Favorite/>}/>
      <Route path='/property/details' element={<DetailsPage/>}/>
      <Route path='/About' element = {<About />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
