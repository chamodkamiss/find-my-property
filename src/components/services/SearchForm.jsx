import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'react-tabs/style/react-tabs.css';
import properties from '../../properties.json';
import './SearchForm.css';
import { Col, Container, Row, Card, Button, Badge } from 'react-bootstrap';

// Define the draggable property card component
const DraggablePropertyCard = ({ property, isSelected, toggleSelection, addToFavorites }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PROPERTY',
    item: { property },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        addToFavorites(property);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div 
      ref={drag} 
      className={`property-card ${isDragging ? 'is-dragging' : ''} ${isSelected ? 'is-selected' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
      onClick={(e) => {
        // Only toggle selection if the checkbox or its label was not clicked directly
        // This prevents deselection when interacting with other card elements
        if (!e.target.closest('.selection-control')) {
          toggleSelection(property.id);
        }
      }}
    >
      <div className="selection-control">
        <input 
          type="checkbox" 
          id={`select-${property.id}`} 
          checked={isSelected}
          onChange={() => toggleSelection(property.id)}
          onClick={(e) => e.stopPropagation()}
          className="property-checkbox"
        />
        <label htmlFor={`select-${property.id}`} onClick={(e) => e.stopPropagation()}>
          {isSelected ? 'Selected' : 'Select'}
        </label>
      </div>
      
      <img src={property.picture} alt={property.name} />
      <h3>{property.name}</h3>                
      <p><strong>Price:</strong> LKR {property.price.toLocaleString()}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Date Added:</strong> {property.dateAdded}</p>
      
      <Tabs>
        <TabList>
          <Tab>About Property</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Google Map</Tab>
        </TabList>

        <TabPanel>
          <p>{property.description}</p>
          <Link to={`/property/${property.id}`} className="btn btn-outline-primary me-2">View More</Link>
          <Button 
            variant="success" 
            size="sm" 
            onClick={(e) => {
              e.stopPropagation();
              addToFavorites(property);
            }}
          >
            Add to Favorites
          </Button>
        </TabPanel>

        <TabPanel>
          <h2>Floor Plan</h2>
          <img 
            src={property.plan} 
            alt="Floor Plan" 
            style={{ width: '100%', height: 'auto' }} 
          />
        </TabPanel>

        <TabPanel>
          <h2>Google Map</h2>
          <div style={{ height: '400px', width: '100%' }}>
            <iframe
              title='location map'
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
  );
};

// Define the draggable favorite item component
const DraggableFavoriteItem = ({ property, removeFromFavorites }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FAVORITE_PROPERTY',
    item: { property },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div 
      ref={drag}
      className={`favorite-item mb-2 ${isDragging ? 'opacity-50' : ''}`}
      style={{ cursor: 'move' }}
    >
      <Card>
        <Card.Body className="p-2">
          <div className="d-flex">
            <img 
              src={property.picture} 
              alt={property.name} 
              style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
              className="me-2"
            />
            <div>
              <Card.Title className="fs-6 mb-1">{property.name}</Card.Title>
              <Card.Text className="small mb-0">
                {property.bedrooms} BR • {property.location}
              </Card.Text>
              <Card.Text className="small text-primary">
                LKR {property.price.toLocaleString()}
              </Card.Text>
            </div>
          </div>
          <div className="mt-2 d-flex justify-content-between">
            <Link to={`/property/${property.id}`} className="btn btn-sm btn-outline-primary">View</Link>
            <Button variant="danger" size="sm" onClick={() => removeFromFavorites(property.id)}>Remove</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

// Define the remove drop zone component
const RemoveDropZone = ({ removeFromFavorites }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'FAVORITE_PROPERTY',
    drop: (item) => {
      if (item.property) {
        removeFromFavorites(item.property.id);
      }
      return { name: 'Remove' };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div 
      ref={drop}
      className={`remove-drop-zone mt-3 ${isOver && canDrop ? 'active' : ''}`}
      style={{
        padding: '15px',
        borderRadius: '8px',
        border: '2px dashed #dc3545',
        backgroundColor: isOver && canDrop ? 'rgba(220, 53, 69, 0.1)' : 'transparent',
        textAlign: 'center',
        transition: 'all 0.3s ease'
      }}
    >
      <i className="bi bi-trash" style={{ fontSize: '1.5rem', color: '#dc3545' }}></i>
      <p className="mb-0 mt-2">Drop here to remove</p>
    </div>
  );
};

// Define the multi-draggable selection component
const MultiDraggableSelection = ({ selectedProperties, addMultipleToFavorites }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'MULTI_PROPERTIES',
    item: { properties: selectedProperties },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        addMultipleToFavorites(selectedProperties);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  if (selectedProperties.length === 0) {
    return null;
  }

  return (
    <div 
      ref={drag}
      className={`multi-selection-indicator ${isDragging ? 'is-dragging' : ''}`}
    >
      <div className="multi-selection-count">{selectedProperties.length}</div>
      <div className="multi-selection-text">
        {selectedProperties.length} properties selected
        <small>Drag to add to favorites</small>
      </div>
      <Button 
        variant="success" 
        size="sm"
        onClick={() => addMultipleToFavorites(selectedProperties)}
      >
        Add All to Favorites
      </Button>
    </div>
  );
};

// Define the favorites drop zone component
const FavoritesDropZone = ({ addMultipleToFavorites, removeFromFavorites, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ['PROPERTY', 'MULTI_PROPERTIES'],
    drop: (item) => {
      if (item.properties) {
        // Handle multi-property drop
        addMultipleToFavorites(item.properties);
      } else if (item.property) {
        // Handle single property drop
        addMultipleToFavorites([item.property]);
      }
      return { name: 'Favorites' };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div 
      ref={drop}
      className={`favorites-container ${isOver && canDrop ? 'drop-active' : ''}`}
    >
      {children}
    </div>
  );
};

const SearchForm = () => {
  const [filters, setFilters] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAdded: '',
    location: '',
  });

  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPropertyIds, setSelectedPropertyIds] = useState([]);
  
  // Get the actual property objects that are selected
  const selectedProperties = filteredProperties.filter(
    property => selectedPropertyIds.includes(property.id)
  );

  const toggleSelection = (propertyId) => {
    setSelectedPropertyIds(prevSelected => 
      prevSelected.includes(propertyId)
        ? prevSelected.filter(id => id !== propertyId)
        : [...prevSelected, propertyId]
    );
  };

  const clearSelection = () => {
    setSelectedPropertyIds([]);
  };

  const selectAll = () => {
    setSelectedPropertyIds(filteredProperties.map(property => property.id));
  };

  const addToFavorites = (property) => {
    if (!favorites.some(fav => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const addMultipleToFavorites = (propertiesToAdd) => {
    // Filter out properties that are already in favorites
    const newFavorites = propertiesToAdd.filter(
      property => !favorites.some(fav => fav.id === property.id)
    );
    
    if (newFavorites.length > 0) {
      setFavorites([...favorites, ...newFavorites]);
      // Clear selection after adding to favorites
      clearSelection();
    }
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter(property => property.id !== propertyId));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  const handleSearch = () => {
    // Show loading state
    setIsLoading(true);
    
    // Clear selection when searching
    clearSelection();
    
    // Build active filters list for display
    const newActiveFilters = [];
    if (filters.type) newActiveFilters.push({ key: 'type', value: filters.type });
    if (filters.location) newActiveFilters.push({ key: 'location', value: filters.location });
    if (filters.minPrice) newActiveFilters.push({ key: 'minPrice', value: `Min $${filters.minPrice}` });
    if (filters.maxPrice) newActiveFilters.push({ key: 'maxPrice', value: `Max $${filters.maxPrice}` });
    if (filters.minBedrooms) newActiveFilters.push({ key: 'minBedrooms', value: `Min ${filters.minBedrooms} BR` });
    if (filters.maxBedrooms) newActiveFilters.push({ key: 'maxBedrooms', value: `Max ${filters.maxBedrooms} BR` });
    if (filters.dateAdded) newActiveFilters.push({ key: 'dateAdded', value: `After ${filters.dateAdded}` });
    
    setActiveFilters(newActiveFilters);

    // Simulate loading
    setTimeout(() => {
      const results = properties.filter((property) => {
        return (
          (!filters.type || (property.type && property.type.toLowerCase() === filters.type.toLowerCase())) &&
          (!filters.minPrice || property.price >= parseInt(filters.minPrice)) &&
          (!filters.maxPrice || property.price <= parseInt(filters.maxPrice)) &&
          (!filters.minBedrooms || property.bedrooms >= parseInt(filters.minBedrooms)) &&
          (!filters.maxBedrooms || property.bedrooms <= parseInt(filters.maxBedrooms)) &&
          (!filters.dateAdded || new Date(property.dateAdded) >= new Date(filters.dateAdded)) &&
          (!filters.location || (property.location && property.location.toLowerCase().includes(filters.location.toLowerCase())))
        );
      });
      
      setFilteredProperties(results);
      setIsLoading(false);
    }, 500);
  };

  const removeFilter = (filterKey) => {
    setFilters({
      ...filters,
      [filterKey]: '',
    });
    
    setActiveFilters(activeFilters.filter(filter => filter.key !== filterKey));
    
    // Re-run search with updated filters
    handleSearch();
  };

  // Initialize with all properties
  useEffect(() => {
    setFilteredProperties(properties);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Container fluid>
        <Row>
          <Col md={8}>
            <Card className="search-form-card sticky-top" style={{ top: '20px', zIndex: 1000 }}>
              <Card.Body>
                <h2 className='pt-2'>Search for Properties</h2>
                
                {/* Search Form */}
                <form onSubmit={(e) => e.preventDefault()} className="d-flex flex-wrap align-items-end">
                  <div className="me-2 mb-2">
                    <label htmlFor="type" className="form-label">Property Type</label>
                    <select
                      id="type"
                      className="form-select"
                      value={filters.type}
                      onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    >
                      <option value="">Any</option>
                      <option value="house">House</option>
                      <option value="flat">Flat</option>
                    </select>
                  </div>

                  <div className="me-2 mb-2">
                    <label htmlFor="minPrice" className="form-label">Min Price</label>
                    <input
                      id="minPrice"
                      type="number"
                      className="form-control"
                      placeholder="Min Price"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    />
                  </div>
                  
                  <div className="me-2 mb-2">
                    <label htmlFor="maxPrice" className="form-label">Max Price</label>
                    <input
                      id="maxPrice"
                      type="number"
                      className="form-control"
                      placeholder="Max Price"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    />
                  </div>

                  <div className="me-2 mb-2">
                    <label htmlFor="minBedrooms" className="form-label">Min Bedrooms</label>
                    <input
                      id="minBedrooms"
                      type="number"
                      className="form-control"
                      placeholder="Min Bedrooms"
                      value={filters.minBedrooms}
                      onChange={(e) => setFilters({ ...filters, minBedrooms: e.target.value })}
                    />
                  </div>
                  
                  <div className="me-2 mb-2">
                    <label htmlFor="maxBedrooms" className="form-label">Max Bedrooms</label>
                    <input
                      id="maxBedrooms"
                      type="number"
                      className="form-control"
                      placeholder="Max Bedrooms"
                      value={filters.maxBedrooms}
                      onChange={(e) => setFilters({ ...filters, maxBedrooms: e.target.value })}
                    />
                  </div>

                  <div className="me-2 mb-2">
                    <label htmlFor="dateAdded" className="form-label">Date Added</label>
                    <input
                      id="dateAdded"
                      type="date"
                      className="form-control"
                      value={filters.dateAdded}
                      onChange={(e) => setFilters({ ...filters, dateAdded: e.target.value })}
                    />
                  </div>

                  <div className="me-2 mb-2">
                    <label htmlFor="location" className="form-label">Location</label>
                    <select
                      id="location"
                      className="form-select"
                      value={filters.location}
                      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    >
                      <option value="">--Select Location--</option>
                      <option value="colombo">Colombo</option>
                      <option value="gampaha">Gampaha</option>
                      <option value="kaluthara">Kaluthara</option>
                      <option value="kandy">Kandy</option>
                      <option value="matara">Matara</option>
                      <option value="galle">Galle</option>
                      <option value="anuradhapura">Anuradhapura</option>
                      <option value="nuwara eliya">Nuwara Eliya</option>
                    </select>
                  </div>

                  <div className="mb-2 align-self-end">
                    <button onClick={handleSearch} className="btn btn-success">Search</button>
                  </div>
                </form>

                {/* Active Filters */}
                {activeFilters.length > 0 && (
                  <div className="active-filters mt-3">
                    <small className="text-muted me-2">Active filters:</small>
                    {activeFilters.map((filter, index) => (
                      <Badge bg="light" text="dark" className="me-2 mb-2" key={index}>
                        {filter.value}
                        <Button 
                          variant="link" 
                          size="sm" 
                          className="p-0 ms-1" 
                          onClick={() => removeFilter(filter.key)}
                        >
                          ×
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>

            {/* Loading indicator */}
            {isLoading && (
              <div className="text-center my-5">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Searching properties...</p>
              </div>
            )}

            {/* Selection Controls */}
            {!isLoading && filteredProperties.length > 0 && (
              <div className="selection-controls d-flex justify-content-between align-items-center mb-3">
                <div>
                  <Button 
                    variant="outline-primary" 
                    size="sm" 
                    className="me-2"
                    onClick={selectAll}
                  >
                    Select All
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={clearSelection}
                    disabled={selectedPropertyIds.length === 0}
                  >
                    Clear Selection
                  </Button>
                </div>
                <div>
                  {selectedPropertyIds.length > 0 && (
                    <span className="selected-count">
                      {selectedPropertyIds.length} properties selected
                    </span>
                  )}
                </div>
                <div>
                  {selectedPropertyIds.length > 0 && (
                    <Button 
                      variant="success" 
                      size="sm"
                      onClick={() => addMultipleToFavorites(selectedProperties)}
                    >
                      Add Selected to Favorites
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Floating Multi-Selection Indicator */}
            <MultiDraggableSelection 
              selectedProperties={selectedProperties}
              addMultipleToFavorites={addMultipleToFavorites}
            />

            {/* Display Results */}
            {!isLoading && (
              <div className="display-list">
                {filteredProperties.length > 0 ? (
                  <div className="property-cards-container">
                    {filteredProperties.map((property) => (
                      <DraggablePropertyCard 
                        key={property.id} 
                        property={property}
                        isSelected={selectedPropertyIds.includes(property.id)}
                        toggleSelection={toggleSelection}
                        addToFavorites={addToFavorites}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="alert alert-info mt-4">
                    <p className="mb-0">No properties found matching your criteria.</p>
                  </div>
                )}
              </div>
            )}
          </Col>
          
          <Col md={4}>
            <FavoritesDropZone 
              addMultipleToFavorites={addMultipleToFavorites} 
              removeFromFavorites={removeFromFavorites}
            >
              <Card className="favorite-bar sticky-top" style={{ top: '20px' }}>
                <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
                  <Card.Title className="mb-0">
                    <i className="bi bi-heart-fill me-2"></i> 
                    Favorites
                    <small className="ms-2">({favorites.length})</small>
                  </Card.Title>
                  {favorites.length > 0 && (
                    <Button 
                      variant="outline-light" 
                      size="sm"
                      onClick={clearAllFavorites}
                    >
                      Clear All
                    </Button>
                  )}
                </Card.Header>
                <Card.Body className="favorites-drop-area">
                  {favorites.length === 0 && (
                    <div className="text-center py-5 text-muted">
                      <i className="bi bi-arrow-down-circle" style={{ fontSize: '2rem' }}></i>
                      <p className="mt-3">Drag properties here to add to favorites</p>
                      <p className="small">Select multiple properties and drag them all at once!</p>
                    </div>
                  )}
                  
                  {favorites.map(property => (
                    <DraggableFavoriteItem 
                      key={property.id}
                      property={property}
                      removeFromFavorites={removeFromFavorites}
                    />
                  ))}
                </Card.Body>
                
                {/* Only show remove drop zone when there are favorites */}
                {favorites.length > 0 && (
                  <RemoveDropZone removeFromFavorites={removeFromFavorites} />
                )}
              </Card>
            </FavoritesDropZone>
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
};

export default SearchForm;