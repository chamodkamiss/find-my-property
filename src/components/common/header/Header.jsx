import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const Header = () => {

  return (
      <div>
        <Navbar expand="lg" className='navbar fixed-top' data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className='logo' >Find My Prop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className='list_item' as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link className='list_item' as={Link} to={'/about'}>About</Nav.Link>
              <Nav.Link className='list_item' as={Link} to={'/services'}>Services</Nav.Link>
              <Nav.Link className='list_item' as={Link} to={'/prices'}>Prices</Nav.Link>
              <Nav.Link className='list_item' as={Link} to={'/contact'}>Contact</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
              <button className='btn btn-success'>Sign Up</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div>
      <Routes>
      <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </div> */}
    </div>
  )
}

export default Header
