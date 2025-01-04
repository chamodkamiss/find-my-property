import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

const Header = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
      <div>
        <Navbar expand="lg" className='navbar fixed-top' >
        <Container>
          <Navbar.Brand href="#home" className='logo' >Find My Prop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link className='list_item' as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link className='list_item' as={Link} to={'/about'}>About</Nav.Link>
              <Nav.Link className='list_item' as={Link} to={'/services'}>Search</Nav.Link>
              <Nav.Link className='list_item' as={Link} to={'/contact'}>Contact</Nav.Link>
              
            </Nav>
            <Nav className='ms-auto'>
              <Nav.Link className='list_item' onClick={toggleDarkMode}>
                {darkMode ? <FaSun /> : <FaMoon />} 
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
