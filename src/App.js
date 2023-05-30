import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,useLocation } from 'react-router-dom';
import About from './pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PropertyList from './pages/PropertyList/PropertyList';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Favorite from './pages/Favorite/Favorite';
import data from './jaon.json'
function App() {
  const location =useLocation().pathname;
  return (
    <div className="App">
      <Header location={location}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/propertyList/city/:city' element ={<PropertyList/>}/>
      <Route path='/propertyList' element ={<PropertyList/>}/>
      <Route path='/favorites' element={<Favorite data={data}/>}/>
      <Route path='/property/details/:id' element={<DetailsPage/>}/>
      <Route path='/About' element = {<About />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
