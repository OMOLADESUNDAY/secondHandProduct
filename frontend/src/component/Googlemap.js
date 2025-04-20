import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Default to central USA (Kansas, roughly)
const center = {
  lat: 39.8283,
  lng: -98.5795
};
const Googlemap = () => {
    const [mapCenter, setMapCenter] = useState(center);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [address, setAddress] = useState('');
    const autocompleteRef = useRef(null);
  
    const handlePlaceChanged = () => {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const location = place.geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        setMapCenter({ lat, lng });
        setSelectedPosition({ lat, lng });
        setAddress(place.formatted_address);
      }
    };
    const getAddressFromCoords = async (lat, lng) => {
      const apiKey = "AIzaSyBIdwDEWGs5DWfjz1gyARFaGm2fdCpgFdg"; // Replace with your actual key
    
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
        );
        const data = await res.json();
    
        if (data.status === "OK") {
          const address = data.results[0]?.formatted_address;
          console.log("Address:", address);
          return address;
        } else {
          console.error("Geocoder failed due to:", data.status);
        }
      } catch (err) {
        console.error("Error fetching geocode data:", err);
      }
    };
    const onMapClick = useCallback((e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setSelectedPosition({ lat, lng });
    
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            setAddress(results[0].formatted_address);
          } else {
            setAddress('No address found');
          }
        } else {
          setAddress('Geocoder failed due to: ' + status);
        }
      });
    }, []);
    useEffect(() => {
      if (selectedPosition) {
        getAddressFromCoords(selectedPosition.lat, selectedPosition.lng);
      }
    }, [selectedPosition]);
    return (
        <LoadScript googleMapsApiKey="AIzaSyBIdwDEWGs5DWfjz1gyARFaGm2fdCpgFdg" libraries={['places']}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={13}
            onClick={onMapClick}
          >
            {selectedPosition && <Marker position={selectedPosition} />}
          </GoogleMap>
    
          <div style={{ marginTop: '10px' }}>
            <p><strong>Latitude:</strong> {selectedPosition?.lat}</p>
            <p><strong>Longitude:</strong> {selectedPosition?.lng}</p>
            <p><strong>Address:</strong> {address || 'Click marker or search above'}</p>
          </div>
        </LoadScript>
      );
}

export default Googlemap