import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import './Featured.css';
import { Link } from 'react-router-dom';

const propertyTypes = [
    {
      icon: "🏠", 
      title: "Family House",
      count: "122 Property",
      bgColor: "#ffe6e6",
      textColor: "#ff0000",
    },
    {
      icon: "🏡",
      title: "House & Villa",
      count: "155 Property",
      bgColor: "#e6ffe6",
      textColor: "#00b300",
    },
    {
      icon: "🏢",
      title: "Apartment",
      count: "300 Property",
      bgColor: "#fff7e6",
      textColor: "#ffaa00",
    },
    {
      icon: "🏬",
      title: "Office & Studio",
      count: "80 Property",
      bgColor: "#f9e6ff",
      textColor: "#b300b3",
    },
    {
      icon: "🏘️",
      title: "Villa & Condo",
      count: "80 Property",
      bgColor: "#e6f7ff",
      textColor: "#007bff",
    },
];

const Featured = () => {
  return (
    <section className="featured-property-types py-5">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Property Types</h2>
          <p className="text-muted">Find All Type of Property.</p>
        </div>

        {/* Property Cards */}
        <Row className="gy-4 ">
          {propertyTypes.map((property, index) => (
            <Col md={6} lg={2} key={index} className="d-flex justify-content-center m-auto">
              <Link to="/services" className="text-decoration-none"> 
              <Card className="property-card text-center" style={{ width: '12rem' }}>
                <div
                  className="icon-container mx-auto mb-3 "
                  style={{
                    backgroundColor: property.bgColor,
                    color: property.textColor,
                  }}
                >
                  <span className="icon">{property.icon}</span>
                </div>
                <Card.Body>
                  <Card.Title className="fs-6">{property.title}</Card.Title>
                  <Card.Text className="text-muted">{property.count}</Card.Text>
                </Card.Body>
              </Card>
              </Link>  
              
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Featured
