import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Recent.css'


const properties = [
    {
      image: "/images/list/p1.jpg", // Replace with actual image URLs
      status: "For Rent",
      title: "Red Carpet Real Estate",
      location: "210 Zirak Road, Canada",
      price: "$3,700",
      type: "Apartment",
    },
    {
      image: "/images/list/p2.jpg",
      status: "For Sale",
      title: "Fairmount Properties",
      location: "5698 Zirak Road, NewYork",
      price: "$9,750",
      type: "Condos",
    },
    {
      image: "/images/list/p3.jpg",
      status: "For Rent",
      title: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      price: "$5,860",
      type: "Offices",
    },
    {
      image: "/images/list/p4.jpg",
      status: "For Rent",
      title: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      price: "$5,860",
      type: "Offices",
    },
    {
      image: "/images/list/p5.jpg",
      status: "For Rent",
      title: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      price: "$5,860",
      type: "Offices",
    },
    {
      image: "/images/list/p6.jpg",
      status: "For Rent",
      title: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      price: "$5,860",
      type: "Offices",
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>
      </div>

      {/* Property Cards */}
      <Row className="gy-4">
        {properties.map((property) => (
          <Col md={6} lg={4} key={property.id}>
            <Card className="property-card shadow-sm">
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
