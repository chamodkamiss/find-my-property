import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Recent.css'


const properties = [
    {
      image: "/images/list/p1.jpg", // Replace with actual image URLs
      status: "For Rent",
      title: "Luxury two stair house",
      location: "210 Armour Street, Colombo",
      price: "LKR 30,000",
      type: "Apartment",
    },
    {
      image: "/images/list/p2.jpg",
      status: "For Sale",
      title: "Fairmount Properties",
      location: "569/1 Vijaya Road, Kolonnawa",
      price: "LKR 4,000,000",
      type: "House",
    },
    {
      image: "/images/list/p3.jpg",
      status: "For Rent",
      title: "The Real Estate Corner",
      location: "562 Malwathu Road, Kandy",
      price: "LKR 35,000",
      type: "Apartment",
    },
    {
      image: "/images/list/p4.jpg",
      status: "For Rent",
      title: "Modern Office Space",
      location: "64/4 Queens Avenue, Colombo",
      price: "LKR 45,500",
      type: "Offices",
    },
    {
      image: "/images/list/p5.jpg",
      status: "For Rent",
      title: "Fully Furnished House",
      location: "24/5 Tewatta Road, Ragama",
      price: "LKR 15,000",
      type: "House",
    },
    {
      image: "/images/list/p6.jpg",
      status: "For Rent",
      title: "Family House",
      location: "54 Ganemulla Market, Gampaha",
      price: "LKR 54,860",
      type: "House",
    },
];

   
const Recent = () => {

     const [favourites, setFavourites] = useState([]);
  
    // Toggle favourite property
    const toggleFavourite = (id) => {
      setFavourites((prevFavourites) =>
        prevFavourites.includes(id)
          ? prevFavourites.filter((favId) => favId !== id) // Remove from favourites
          : [...prevFavourites, id] // Add to favourites
      );
    };
  return (
    <section className="recent-property-listed py-5">
    <Container>
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Recent Property Listed</h2>
        <p className="text-muted">
        Discover the latest properties added to our listings. 
        Whether you're looking for a new home or an investment opportunity, explore our recent additions to find the perfect property for you.
        </p>
      </div>

      {/* Property Cards */}
      <Row className="gy-6">
        {properties.map((property) => (
          <Col md={6} lg={4} key={property.id}>
            <Card className="property-card shadow-sm" style={{ width: '22rem' }}>
              <Card.Img
                variant="top"
                src={property.image}
                alt={property.title}
              />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span
                    className={`badge ${
                      property.status === "For Sale" ? "bg-success" : "bg-warning"
                    } text-light`}
                  >
                    {property.status}
                  </span>
                  <Button
                    variant="link"
                    className="text-muted p-0"
                    onClick={() => toggleFavourite(property.id)}
                  >
                    <i
                      className={`bi ${
                        favourites.includes(property.id)
                          ? "bi-heart-fill text-danger"
                          : "bi-heart"
                      }`}
                    ></i>
                  </Button>
                </div>
                <Card.Title className="fs-5">{property.title}</Card.Title>
                <Card.Text className="text-muted mb-2">
                  <i className="bi bi-geo-alt"></i> {property.location}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text-success">{property.price}</h5>
                  <small className="text-muted">{property.type}</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
  )
}

export default Recent
