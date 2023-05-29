import React from 'react'
import './About.css';
import Services from './Services';
import Info from './Info';
import Partner from './Partner'
import Member from './Member';
// import Test from './Test'
import Hero from './Hero';
export default function About() {
  return (
    <>
       <Hero />
    {/* <Test/> */}
       <Partner />
       <Info />
      <Services/>
      <Member />
    </>
  )
}
