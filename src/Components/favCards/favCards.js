import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './favCards.scss'

function FavCards({ data,handleDeleteFavorite}) {
    const favLocation =useLocation().pathname; 
    console.log(favLocation);
    const isOnFav =favLocation==='/favorites'?true :false
    
    const favLocation2 =useLocation().pathname; 
    const isOnFav2 =favLocation2==='/favorites'?true :false
    // console.log(favLocation2);
    console.log(isOnFav2);
      return (
        <div className='flex  justify-around'>
           <div className='fav-cards-main'>
  <div className='fav-card-image'>
    <img src={data.imgurl} alt="Card Image" />

  </div>
  {
    isOnFav?null:
    <div>
        <h6>{data.title}</h6>
        </div>

  }
 
 
                    <p><strong>{data.price} AED</strong></p>
                <p>  {Math.floor(data.area)} Sq Ft </p>
                <p>{data.purpose} </p>
            <div classname = 'fav_detalis'>
                <Link onClick={()=>handleDeleteFavorite(data.externalid)} > <button className='button-fav-card'>
                
                {
                    isOnFav2 && <i class="fa-solid fa-trash-can"></i>
                 }
                     </button></Link>
                </div>
            </div>
        </div>
    )
}
export default FavCards
