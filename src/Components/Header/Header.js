import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Header/Header.css'
import logo from './logo.png'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar  expand="lg" className='header-cont1 ' >
      <Container className='header-cont2'>
        <Link className='navbar-brand header-logo-section' to="/">
          {/* <img className='logo-header'  src={logo} alt="" /> */}
          <h2>ES</h2>
          <h4 className='navbar-brand navbar-text '>Elite Sands</h4>
          </Link >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link className='nav-link header-link' to='/'>Home</Link>
            <Link className='nav-link header-link' to='/PropertyList'>PropertyList</Link>
            <Link className='nav-link header-link' to='/Favorite'>Favorite</Link>
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