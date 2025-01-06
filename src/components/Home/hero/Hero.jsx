import React from 'react'
import { Container, Row, Col,  Button } from "react-bootstrap";
import './Hero.css'


const Hero = () => {
  return (
    <div className="hero-section">
    <Container className="text-center text-white">
      {/* Headline Section */}
      <Row>
        <Col>
          <h1 className="display-4 fw-bold">Search Your Next Home</h1>
          <p className="lead">
            Find new & featured property located in your local city.
          </p>
        </Col>
      </Row>
      <Button href='/services' variant="success" className=" mt-4" size='lg'>Get Started</Button>

    </Container>
  </div>
  )
}

export default Hero
