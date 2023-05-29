import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './About.css';
// import Swipper from './Swipper.';
import Services from './Services';
import Info from './Info';
import Partner from './Partner'
import Member from './Member';
// import Test from './Test'
import Hero from './Hero';
export default function About() {
  return (
    <>
       <Header />
       <Hero />
    {/* <Test/> */}
       {/* <Swipper /> */}
       <Partner />
       <Info />
      <Services/>
      <Member />
      <Footer />
    </>
  )
}
