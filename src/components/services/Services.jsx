import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Services.css'

import SearchForm from './SearchForm'

const Services = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      <div className="search-section ">
        <Container>
          <Row>
            <Col md={6}>
              <h6 className="text-white mb-3 pt-5">Services</h6>
              <h1 className="display-5 fw-bold mb-4">
                Search Your own Property
              </h1>
            </Col>
          </Row>
        </Container>
      </div> 
      <SearchForm/>
    
    </div>
      
    </>
  )
}

export default Services
