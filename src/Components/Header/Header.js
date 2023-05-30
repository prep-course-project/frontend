import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Header/Header.css'
import logo from '../../pages/Home/assets/logo'
import { Link } from 'react-router-dom';

export default function Header({location}) {
  console.log(location)
  return (
    <Navbar  expand="lg" className={`${location==='/'?'onMain__absolute':'header-cont1'} `} >
      <Container className='header-cont2'>
        <Link className='navbar-brand header-logo-section' to="/">
          {/* <img className='logo-header'  src={logo} alt="" /> */}
          <h4 className='navbar-brand navbar-text '>Elite Sands</h4>
          </Link >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link className='nav-link header-link' to='/'>Home</Link>
            <Link className='nav-link header-link' to='/PropertyList'>PropertyList</Link>
            <Link className='nav-link header-link' to='/favorites'>Favorite</Link>
            <Link className='nav-link header-link' to='/About'>About</Link>
             {/* <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/PropertyList">PropertyList</Nav.Link>
             <Nav.Link href="/Favorite">Favorite</Nav.Link>
             <Nav.Link href="/About">About</Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}