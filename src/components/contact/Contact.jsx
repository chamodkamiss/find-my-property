import React from 'react'
import { Container, Row, Col,Form,Button } from 'react-bootstrap'
import './Contact.css'



const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <>
    <div className="contact-section "> 
        <Container>
          <Row>
            <Col>
              <h6 className="text-white mb-3 pt-5">Contact Us</h6>
              <h1 className="display-4 fw-bold mb-4">Get Helps & Friendly Support</h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Form Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="mb-4">Fillup The Form</h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Your message..."
                    required
                  />
                </Form.Group>
                <Button variant="success" type="submit" size="lg">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
