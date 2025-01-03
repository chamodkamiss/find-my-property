import React from 'react'
import { Container, Row, Col,Form,Button } from 'react-bootstrap'
// import './Contact.css'



const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
    <div className="text-white py-5 mb-5" style={{
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/src/components/images/contact.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center'
      }}>
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
  //   <div className="contact-section text-white py-5">
  //   <Container>
  //     <Row className="align-items-center">
  //       <Col md={8}>
  //       <p>Contact Us</p>
  //       <h2 className="fw-bold display-4">Get Help and Support</h2>
  //       </Col>
  //     </Row>
  //     <Row className="justify-content-center">
  //       <Col md={8}>
  //         <div className="p-4 shadow-sm rounded bg-white">
  //           <h4 className="mb-4">Fillup The Form</h4>
  //           <Form>
  //             <Row>
  //               <Col md={6}>
  //                 <Form.Group className="mb-3" controlId="formName">
  //                   <Form.Control type="text" placeholder="Name" />
  //                 </Form.Group>
  //               </Col>
  //               <Col md={6}>
  //                 <Form.Group className="mb-3" controlId="formEmail">
  //                   <Form.Control type="email" placeholder="Email" />
  //                 </Form.Group>
  //               </Col>
  //             </Row>
  //             <Form.Group className="mb-3" controlId="formSubject">
  //               <Form.Control type="text" placeholder="Subject" />
  //             </Form.Group>
  //             <Form.Group className="mb-3" controlId="formMessage">
  //               <Form.Control
  //                 as="textarea"
  //                 rows={4}
  //                 placeholder="Message"
  //               />
  //             </Form.Group>
  //             <Button variant="success" type="submit">
  //               Submit Request
  //             </Button>
  //           </Form>
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
  // </div>
  )
}

export default Contact
