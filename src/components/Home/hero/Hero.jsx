import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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

      {/* Search Form Section */}
      <div className="search-form-container mt-4 p-3 bg-white rounded shadow">
        <Form>
          <Row>
            <Col md={3}>
              <Form.Group controlId="location">
                <Form.Label>City/Street</Form.Label>
                <Form.Control type="text" placeholder="Location" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="propertyType">
                <Form.Label>Property Type</Form.Label>
                <Form.Control type="text" placeholder="Property Type" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="priceRange">
                <Form.Label>Price Range</Form.Label>
                <Form.Control type="text" placeholder="Price Range" />
              </Form.Group>
            </Col>
            <Col md={3} className="d-flex align-items-end">
              <Button variant="success" className="w-100">
                 Search <i className="fa fa-search"></i>
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  </div>
  )
}

export default Hero
