import React, { useEffect, useState } from 'react'
import './Favorite.scss'
import FavCards from '../../Components/favCards/favCards'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function Favorite({data}) {
  const [favoriteList,setFavoriteList]=useState([]);
  const errorToast=(message)=> toast.error(message);
  const successToast=(messaage)=>toast(messaage);
  function handleGetFromFavorite(){
    axios.get(`${process.env.REACT_APP_URL}/favorites`)
    .then(res=>{
      console.log(res.data)
      setFavoriteList(res.data);
    })
    .catch(err=>{
      errorToast('something went wrong please refresh the page')
      console.log('something went wrong in get favorites')
    })
  }
  function handleDeleteFavorite(externalID){
  
    axios.delete(`${process.env.REACT_APP_URL}/favorites/${externalID}`)
    .then(res=>{
      if(res.status===204){
        let newList=favoriteList.filter(e=>e.externalid!==externalID);
        console.log(newList,'new fav')
        setFavoriteList(newList)
        successToast('Property Deleted Successfully');
      }else {
        errorToast(res.data)
      }
    })
  }
  useEffect(()=>{
    handleGetFromFavorite()
  },[])
  return (
    <div className='main-div-fav'>
      
      <section className='side-bar-fav'>

  <img src={require('../../FullLogo_Transparent (3).png')} alt="Logo" />
</section>
      <section className='data-fav'>
      <div className='fav-header'>

        <p> Your Favorite List </p>
      </div>
      <section className='table-header-fav'>
        <p>Thumbnail</p>
        <p>Price</p>
        <p>Area</p>
        <p>Action</p>
      
      </section>
      <div className='cardNumber1'> </div>
        {favoriteList.map(item=><FavCards handleDeleteFavorite={handleDeleteFavorite} data={item}/>)}
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
  )
}
