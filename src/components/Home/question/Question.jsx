import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Question.css'
import { useNavigate } from 'react-router-dom'

const Question = () => {

    const navigate= useNavigate();

    const handleContactClick =()=>{
        navigate('/contact')
    };

  return (
    <div className="questions-section text-white py-5">
    <Container>
      <Row className="align-items-center">
        <Col md={8}>
          <h2 className="fw-bold display-4">Do You Have Questions?</h2>
          <p>We'll help you to grow your career and growth.</p>
        </Col>
        <Col md={4} className="text-md-end">
          <Button variant="light" className="contact-btn" onClick={handleContactClick}>
            Contact Us Today
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Question
