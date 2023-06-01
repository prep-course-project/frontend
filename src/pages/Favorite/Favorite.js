import React, { useEffect, useState } from 'react';
import './Favorite.scss';
import { Link } from 'react-router-dom';
import FavCards from '../../Components/favCards/favCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import trialData from './favData.json';

export default function Favorite({ data }) {
  const [favoriteList, setFavoriteList] = useState([]);

  const errorToast = (message) => toast.error(message);
  const successToast = (message) => toast(message);

  function handleGetFromFavorite() {
    axios.get(`${process.env.REACT_APP_URL}/favorites`)
      .then(res => {
        console.log(res.data);
        setFavoriteList(res.data);
      })
      .catch(err => {
        errorToast('Something went wrong. Please refresh the page.');
        console.log('Something went wrong in get favorites');
      });
  }

  function handleDeleteFavorite(externalID) {
    axios.delete(`${process.env.REACT_APP_URL}/favorites/${externalID}`)
      .then(res => {
        if (res.status === 204) {
          let newList = favoriteList.filter(e => e.externalid !== externalID);
          console.log(newList, 'new fav');
          setFavoriteList(newList);
          successToast('Property Deleted Successfully');
        } else {
          errorToast(res.data);
        }
      });
  }

  useEffect(() => {
    handleGetFromFavorite();
  }, []);

  return (
    <div className="main-div-fav">
      <section className="side-bar-fav">
        <img src={require('../../FullLogo_Transparent (3).png')} alt="Logo" />
        <div className="sidebar-tabs">
          <Link className="Fav-Home tab" to="/">Home</Link>
          <Link className="Fav-Prop tab" to="/PropertyList">PropertyList</Link>
          <Link className="Fav-Fav tab" to="/favorites">Favorite</Link>
          <Link className="Fav-About tab" to="/About">About</Link>
        </div>
      </section>
      <section className="data-fav">
        <div className="fav-header">
          <p>Your Favorite List</p>
        </div>
        <section className="table-header-fav">
          <p>Thumbnail</p>
          <p>Price</p>
          <p>Area</p>
          <p>Purpose</p>
        </section>
        <div className="cardNumber1"></div>
        {trialData.map((item) => (
          <FavCards handleDeleteFavorite={handleDeleteFavorite} data={item} />
        ))}
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
