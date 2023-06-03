import React, { useState } from 'react';
import '../price_area/Price_Area.css';

export default function PriceArea() {
  const [rooms, setRooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [price, setPrice] = useState(20000);
  const [area, setArea] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

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

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="price-area-main-container">
      <div className="titleO-descriptionO-container">
        <div className="titleO-container">
          <h2 className="titleO-heading">Now it's time to come up with a title for your apartment</h2>
          <p className="titleO-descriptionO">Remember, shorter titles tend to have a greater impact. So, let your creativity flow and have fun with it!</p>
          <input
            type="text"
            placeholder='Add your title here'
            className="titleO-input"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="descriptionO-container">
          <h2>Add Description</h2>
          <textarea
            className="descriptionO-input"
            placeholder='Add your house description here'
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="url-container">
          <h2>Add URL to your house</h2>
          <input
            type="text"
            placeholder="Add your URL here"
            className="url-input"
            value={url}
            onChange={handleUrlChange}
          />
        </div>
      </div>

      <div className="price-area-container">
        <div className="property-details">
          <h2>Your Property Details</h2>
          <p>Please provide the following details:</p>
        </div>
        <section className="RBPA">
          <h3 className="RBPA">Rooms</h3>
          <div className="input-wrapper">
            <button className="buttonO" onClick={decrementRooms}>-</button>
            <span>{rooms}</span>
            <button className="buttonO" onClick={incrementRooms}>+</button>
          </div>
        </section>

        <section className="RBPA">
          <h3 className="RBPA">Bathrooms</h3>
          <div className="input-wrapper">
            <button className="buttonO" onClick={decrementBathrooms}>-</button>
            <span>{bathrooms}</span>
            <button className="buttonO" onClick={incrementBathrooms}>+</button>
          </div>
        </section>

        <section className="RBPA">
          <h3 className="RBPA">Price</h3>
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

        <section className="RBPA">
          <h3 className="RBPA">Area</h3>
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
