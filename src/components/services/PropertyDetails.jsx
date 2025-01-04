// PropertyDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../../properties.json"; // Your JSON file with property data
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData.find((prop) => prop.id === id);

  if (!property) {
    return <p>Property not found.</p>;
  }

  const images = property.images.map((img) => ({
    original: img,
    thumbnail: img,
  }));
  

  return (
    <div className="property-details " style={{ padding: "20px" }}>
      <h2 className="mt-5 pt-5 ">{property.name}</h2>
      <p>
        <strong>Type:</strong> {property.type}
      </p>
      <p>
        <strong>Price:</strong> LKR {property.price.toLocaleString()}
      </p>
      <p>
        <strong>Location:</strong> {property.location}
      </p>
      <div className="property-gallery">
        <ReactImageGallery items={images} />
      </div>
      <p>
        <strong>Description:</strong> {property.description}
      </p>
    </div>
  );
};

export default PropertyDetails;
