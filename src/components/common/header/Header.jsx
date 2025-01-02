import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
  return (
    <div>
       <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home" ><img src=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto justify-content-center">
            <Nav.Link href="#features" className='me-3'>Home</Nav.Link>
            <Nav.Link href="#features"className='me-3'>About</Nav.Link>
            <Nav.Link href="#pricing" className='me-3'>Services</Nav.Link>
            <Nav.Link href="#pricing" className='me-3'>Prices</Nav.Link>
            <Nav.Link href="#pricing" className='me-3'>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
