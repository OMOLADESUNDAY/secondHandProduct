import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
const ShippingAddress = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      fullName: '',
      address: '',
      city: '',
      postalCode: '',
      country: ''
    });
  
    const [error, setError] = useState('');
  
    useEffect(() => {
      const savedAddress = localStorage.getItem('shippingAddress');
      if (savedAddress) {
        setFormData(JSON.parse(savedAddress));
      }
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const { fullName, address, city, postalCode, country } = formData;
  
      if (!fullName || !address || !city || !postalCode || !country) {
        setError('Please fill in all fields');
        return;
      }
  
      localStorage.setItem('shippingAddress', JSON.stringify(formData));
      setError('');
      navigate('/payment'); // Go to payment or next step
    };
  
    return (
      <Container className="mt-5" >
        <h2 className="mb-4">Shipping Address</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} >
          <Row>
            <Col md={6}>
              <Form.Group controlId="fullName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </Form.Group>
              <Form.Group controlId="address" className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter shipping address"
                />
              </Form.Group>
              <Form.Group controlId="city" className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="postalCode" className="mb-3">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Enter postal code"
                />
              </Form.Group>
              <Form.Group controlId="country" className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter country"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="danger" type="submit">
            Continue
          </Button>
        </Form>
      </Container>
    );
  
}

export default ShippingAddress