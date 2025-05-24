import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import './About.css'

const About = () => {
  return (
    <>
    <div className="about-section ">
        <Container>
          <Row>
            <Col md={6}>
              <h6 className="text-white mb-3 pt-5">About Us</h6>
              <h1 className="display-5 fw-bold mb-4">
                About Us - Who We Are?
              </h1>
            </Col>
          </Row>
        </Container>
      </div> 
      <Container className="py-5">
      <Row className="align-items-center g-5">
        <Col lg={6}>
          <div className="pe-lg-5">
            <h1 className="display-4 fw-bold text-navy mb-3" style={{ color: '#2A344A' }}>
              Our Agency Story
            </h1>
            
            <p className="text-secondary fs-5 mb-4">
              Check out our company story and work process
            </p>
            
            <p className="mb-4">
            Our journey began with a simple vision: to transform how people find their perfect homes. Since 2024, we've been pioneering innovative approaches to real estate, combining local expertise with cutting-edge technology. 
            Our dedicated team of professionals works tirelessly to understand each client's unique needs, ensuring every property match is more than just a transaction - it's a perfect fit for someone's future.
            </p>
            
            <p className="mb-4">
            What sets us apart is our commitment to personalized service and community values. We don't just list properties; we help build neighborhoods and create communities. 
            Our agents live and work in the areas they serve, bringing deep local knowledge and genuine passion to every client interaction. Whether you're a first-time buyer or seasoned investor, we're here to make your real estate experience exceptional.
            </p>
            
            <Button href='/services'
              variant="success" 
              size="lg" 
              className="rounded-pill px-4 py-3 ">  Get your property today
            </Button>
          </div>
        </Col>
        
        <Col lg={6}>
          <img
            src="/images/about-family.jpg"
            alt="Family enjoying time together"
            className="img-fluid rounded-3 w-100"
            style={{ 
              objectFit: 'cover',
              height: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default About
