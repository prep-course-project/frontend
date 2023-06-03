import React, { useState } from 'react';
import '../price_area/Price_Area.css';

export default function PriceArea() {
  const [rooms, setRooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [price, setPrice] = useState(20000);
  const [area, setArea] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="price-area-main-container">
      <div className="title-description-container">
        <div className="title-container">
          <h2 className="title-heading">Now it's time to come up with a title for your apartment</h2>
          <p className="title-description">Remember, shorter titles tend to have a greater impact. So, let your creativity flow and have fun with it!</p>
          <input
            type="text"
            className="title-input"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="description-container">
          <h2>Add Description</h2>
          <textarea
            className="description-input"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
      </div>

      <div className="price-area-container">
        <div className="property-details">
          <h2>Your Property Details</h2>
          <p>Please provide the following details:</p>
        </div>
        <section>
          <h3>Rooms</h3>
          <div className="input-wrapper">
            <button className="button" onClick={decrementRooms}>-</button>
            <span>{rooms}</span>
            <button className="button" onClick={incrementRooms}>+</button>
          </div>
        </section>

        <section>
          <h3>Bathrooms</h3>
          <div className="input-wrapper">
            <button className="button" onClick={decrementBathrooms}>-</button>
            <span>{bathrooms}</span>
            <button className="button" onClick={incrementBathrooms}>+</button>
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
    </div>
  );
}
