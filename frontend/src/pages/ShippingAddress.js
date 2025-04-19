import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import '../styles/shippingaddress.css'
import Googlemap from '../component/Googlemap';
const ShippingAddress = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      fullName: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
      nearestbusstop:''
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
    
      const { fullName, address, city, postalCode, country, nearestbusstop } = formData;
    
      if (!fullName || !address || !city || !postalCode || !country || !nearestbusstop) {
        setError('Please fill in all fields');
        return;
      }
    
      // Save to localStorage
      localStorage.setItem('shippingAddress', JSON.stringify(formData));
    
      // Optional: Clear form
      setFormData({
        fullName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        nearestbusstop: ''
      });
    
      setError('');
      navigate('/payment'); // Go to payment page
    };
  
    return (
      <Container className="mt-5" >
        <h2 className="mb-4 shipping-txt">Shipping Address</h2>
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
                  type="number"
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
              <Form.Group controlId="nearestbusstop" className="mb-3">
                <Form.Label>Nearest Busstop/Park</Form.Label>
                <Form.Control
                  type="text"
                  name="nearestbusstop"
                  value={formData.nearestbusstop}
                  onChange={handleChange}
                  placeholder="Enter Nearest Busstop/Park"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className='shipping-btn-container'>
          <Button variant="danger shipping-txt" className='shipping-btn' type="submit">
            Continue
          </Button>
          </div>
        
        </Form>
        <Googlemap/>
      </Container>
    );
  
}

export default ShippingAddress

// import React, { useEffect, useState, useRef } from 'react';
// import { LoadScript, Autocomplete } from '@react-google-maps/api';

// const libraries = ['places'];
// const googleMapsApiKey = 'AIzaSyDEw2exE2HilsFOnGWnjHRnEUdN21-M_10'; // replace with your actual key

// const defaultAddress = {
//   country: 'United States',
//   address: '',
//   city: '',
//   state: '',
//   postalCode: '',
// };

// const ShippingAddress = () => {
//     const [addressData, setAddressData] = useState(() => {
//         const stored = localStorage.getItem('shippingAddress');
//         return stored ? JSON.parse(stored) : defaultAddress;
//       });
    
//       const autocompleteRef = useRef(null);
    
//       const handlePlaceSelect = () => {
//         const place = autocompleteRef.current.getPlace();
//         if (!place) return;
    
//         const address = {
//           address: place.formatted_address || '',
//           city: '',
//           state: '',
//           postalCode: '',
//           country: 'United States',
//         };
    
//         place.address_components.forEach((comp) => {
//           const types = comp.types;
//           if (types.includes('locality')) address.city = comp.long_name;
//           if (types.includes('administrative_area_level_1')) address.state = comp.short_name;
//           if (types.includes('postal_code')) address.postalCode = comp.long_name;
//         });
    
//         setAddressData(address);
//         localStorage.setItem('shippingAddress', JSON.stringify(address));
//       };
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         const updated = { ...addressData, [name]: value };
//         setAddressData(updated);
//         localStorage.setItem('shippingAddress', JSON.stringify(updated));
//       };
    
//       const fetchCurrentLocation = () => {
//         if (!navigator.geolocation) return alert("Geolocation not supported.");
//         navigator.geolocation.getCurrentPosition(async (position) => {
//           const { latitude, longitude } = position.coords;
    
//           const res = await fetch(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsApiKey}`
//           );
//           const data = await res.json();
//           const place = data.results[0];
//           if (place) {
//             const event = { target: { value: place.formatted_address } };
//             autocompleteRef.current = { getPlace: () => place };
//             handlePlaceSelect();
//           }
//         });
//       };
//     return (
//         <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
//           <div className="shipping-form">
//             <h3>Shipping Address</h3> 
//             <div>
//               <label>Address:</label>
//               <Autocomplete
//                 onLoad={(ref) => (autocompleteRef.current = ref)}
//                 onPlaceChanged={handlePlaceSelect}
//               >
//                 <input
//                   type="text"
//                   name="address"
//                   value={addressData.address}
//                   onChange={handleChange}
//                   placeholder="Enter your address"
//                 />
//               </Autocomplete>
//             </div>
//             <div>
//               <label>City:</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={addressData.city}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label>State:</label>
//               <input
//                 type="text"
//                 name="state"
//                 value={addressData.state}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label>Postal Code:</label>
//               <input
//                 type="text"
//                 name="postalCode"
//                 value={addressData.postalCode}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label>Country:</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={addressData.country}
//                 onChange={handleChange}
//               />
//             </div>
//             <button onClick={fetchCurrentLocation}>Use Current Location</button>
//           </div>
//         </LoadScript>
//       );
// }

// export default ShippingAddress