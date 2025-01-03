import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 ">
    <Container>
      <Row className='pb-5'>
        {/* Logo and Help Section */}
        <Col md={4}>
          <h4 className="fw-bold">FindMyProp</h4>
          <p>Do You Need Help With Anything?</p>
          <p>
            Receive updates, hot deals, tutorials, and discounts sent
            straight to your inbox every month.
          </p>
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Email Address"
              className="me-2"
            />
            <Button variant="success">Subscribe</Button>
          </Form>
        </Col>

        {/* Quick Links */}
        <Col md={3}>
          <br />
          <ul className="list-unstyled">
            <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
            <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
            <li><Link to="/prices" className="text-white text-decoration-none">Prices</Link></li>
            <li><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
            
          </ul>
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col className="text-center">
          <p className="mb-0">
            © 2024 FindMyProp. Designed By <strong>ChamodKamiss</strong>.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer
