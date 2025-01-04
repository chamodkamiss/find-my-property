import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import properties from '../../properties.json'; // Import JSON data
import './SearchForm.css';
import { Col, Container,Row,Card,Button } from 'react-bootstrap';


const SearchForm = () => {
  const [filters, setFilters] = useState({
    
    type: '',
    minPrice: '', // Minimum price
    maxPrice: '', // Maximum price
    minBedrooms: '', // Minimum bedrooms
    maxBedrooms: '', // Maximum bedrooms
    dateAdded: '', // Date added (for filtering after a specific date)
    location: '',
    picture: ''
  });

  
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (property) => {
    setFavorites([...favorites, property]);
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter(property => property.id !== propertyId));
  };

  const handleSearch = () => {
    const results = properties.filter((property) => {
      return (
        // Filter by type
        (!filters.type || (property.type && property.type.toLowerCase() === filters.type.toLowerCase())) &&
  
        // Filter by price
        (!filters.minPrice || property.price >= parseInt(filters.minPrice)) &&
        (!filters.maxPrice || property.price <= parseInt(filters.maxPrice)) &&
  
        // Filter by bedrooms
        (!filters.minBedrooms || property.bedrooms >= parseInt(filters.minBedrooms)) &&
        (!filters.maxBedrooms || property.bedrooms <= parseInt(filters.maxBedrooms)) &&
  
        // Filter by date added
        (!filters.dateAdded || new Date(property.dateAdded) >= new Date(filters.dateAdded)) &&
  
        // Filter by postcode
        (!filters.location || (property.location && property.location.toLowerCase().startsWith(filters.location.toLowerCase())))
      );
    });
    setFilteredProperties(results);
  };
  
  

  return (
    <Container fluid>
        <Row >
            <Col md={8}>
            
            <h2 className='pt-2'>Search for Properties</h2>
      
            {/* Search Form */}
            <form onSubmit={(e) => e.preventDefault()}>
            <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
                <option value="">Any</option>
                <option value="house">House</option>
                <option value="flat">Flat</option>
            </select>

            <input
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            />
            <input
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            />

            <input
                type="number"
                placeholder="Min Bedrooms"
                value={filters.minBedrooms}
                onChange={(e) => setFilters({ ...filters, minBedrooms: e.target.value })}
            />
            <input
                type="number"
                placeholder="Max Bedrooms"
                value={filters.maxBedrooms}
                onChange={(e) => setFilters({ ...filters, maxBedrooms: e.target.value })}
            />

            <input
                type="date"
                value={filters.dateAdded}
                onChange={(e) => setFilters({ ...filters, dateAdded: e.target.value })}
            />

            <input
                type="text"
                placeholder="Location(Colombo,Gampaha,Kandy)"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />

            <button onClick={handleSearch} class='search-button '>Search</button>
            </form>


            {/* Display Results */}
            <div class='display-list' style={{width:'18rem'}}>
            {filteredProperties.length > 0 ? (
              <div className="property-cards-container">
                {filteredProperties.map((property) => (
                <div key={property.id} className="property-card">
                <img src={property.picture} alt={property.name} />
                <h3>{property.name}</h3>                
                <p>Price: LKR{property.price}</p>
                <p>Bedrooms: {property.bedrooms}</p>
                <p>Location: {property.location}</p>
                <p>Date Added: {property.dateAdded}</p>
                
            <Tabs>
                <TabList>
                <Tab>About Property</Tab>
                <Tab>Floor Plan</Tab>
                <Tab>Google Map</Tab>
                </TabList>

                <TabPanel>
                    <p>{property.description}</p>
                <Link to={`/property/${property.id}`}>View More</Link>
                <Button variant="success" className='m-2'size='sm' onClick={() => addToFavorites(property)}>Add to Favorites</Button>
                
                </TabPanel>

                <TabPanel>
                <h2>Floor Plan</h2>
                <img 
                    src="floor-plan-image-url" 
                    alt="Floor Plan" 
                    style={{ width: '100%', height: 'auto' }} 
                />
                </TabPanel>

                <TabPanel>
                <h2>Google Map</h2>
                <div style={{ height: '400px', width: '100%' }}>
                    {/* Google Map Embed Code or React Google Map Component */}
                    <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    src="https://www.google.com/maps/embed?pb=..." 
                    allowFullScreen 
                    aria-hidden="false" 
                    tabIndex="0"
                    />
                </div>
                </TabPanel>
            </Tabs>
            </div>
            ))}
              </div>
            
        ) : (
            <p>No properties found matching your criteria.</p>
        )}
            </div>
        
        </Col>
        <Col md={4}>
          <Card className="favorite-bar mt-2 pt-2">
            <Card.Body>
              <Card.Title>Favorites</Card.Title>
              {favorites.length > 0 ? (
                favorites.map(property => (
                  <Card key={property.id} className="favorite-item mb-2">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <Card.Text>{property.name}</Card.Text>
                      <Button variant="danger" onClick={() => removeFromFavorites(property.id)}>Remove</Button>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <Card.Text>No favorite properties.</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
                
        </Row>
        
        </Container>
    
  );
};

export default SearchForm; 