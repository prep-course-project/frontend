import React from 'react'
import './About.css';
import Services from './Services';
import Info from './Info';
import Partner from './Partner'
import Member from './Member';
// import Test from './Test'
import AboutHero from './AboutHero'
export default function About() {
  return (
    <>
       <AboutHero />
       <Partner />
       <Info />
      <Services/>
      <Member />
    </>
  )
}
