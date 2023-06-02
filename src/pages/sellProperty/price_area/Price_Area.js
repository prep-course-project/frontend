import React, { useState } from 'react';
import '../price_area/Price_Area.css'; 

export default function PriceArea() {
  const [rooms, setRooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [price, setPrice] = useState(20000);
  const [area, setArea] = useState(0);

  const incrementRooms = () => {
    if (rooms < 7) {
      setRooms(rooms + 1);
    }
  };

  const decrementRooms = () => {
    if (rooms > 0) {
      setRooms(rooms - 1);
    }
  };

  const incrementBathrooms = () => {
    if (bathrooms < 7) {
      setBathrooms(bathrooms + 1);
    }
  };

  const decrementBathrooms = () => {
    if (bathrooms > 0) {
      setBathrooms(bathrooms - 1);
    }
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value);
    if (newPrice >= 20000 && newPrice <= 999999) {
      setPrice(newPrice);
    }
  };

  const handleAreaChange = (e) => {
    const newArea = parseInt(e.target.value);
    if (newArea >= 0 && newArea <= 10000) {
      setArea(newArea);
    }
  };

  return (
      <div className="price-area-container">
   <h2 className="property-details">Your Property Details</h2> 
    <p className="description">Please provide the following details:</p> 
    <section>
          <h3>Rooms</h3>
          <div className="input-wrapper">
            <button onClick={decrementRooms}>-</button>
            <span>{rooms}</span>
            <button onClick={incrementRooms}>+</button>
          </div>
        </section>
    
        <section>
          <h3>Bathrooms</h3>
          <div className="input-wrapper">
            <button onClick={decrementBathrooms}>-</button>
            <span>{bathrooms}</span>
            <button onClick={incrementBathrooms}>+</button>
          </div>
        </section>
    
        <section>
          <h3>Price</h3>
          <div className="input-wrapper">
            <input
              type="number"
              className="price-input"
              min="20000"
              max="999999"
              value={price}
              onChange={handlePriceChange}
            />
            <span>AED</span> 
          </div>
        </section>
    
        <section>
          <h3>Area</h3>
          <div className="input-wrapper">
            <input
              type="number"
              className="area-input"
              min="0"
              max="10000"
              value={area}
              onChange={handleAreaChange}
            />
            <span>Sq Ft</span>
          </div>
        </section>
      </div>
    );
    
}
