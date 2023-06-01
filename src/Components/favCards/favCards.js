import React from 'react'
import { Link } from 'react-router-dom'
import './favCards.scss'
function FavCards({ data,handleDeleteFavorite}) {
    return (
        <div className='flex  justify-around'>
           <div className='fav-cards-main'>
  <div className='fav-card-image'>
    <img src={data.imgurl} alt="Card Image" />
  </div>
                    <p><strong>{data.price} AED</strong></p>
                <p>  {Math.floor(data.area)} Sq Ft </p>
                <p>{data.purpose} </p>
            <div classname = 'fav_detalis'>
                <Link onClick={()=>handleDeleteFavorite(data.externalid)} > <button className='button-fav-card'><i class="fa-solid fa-trash-can"></i> </button></Link>
                </div>
            </div>
        </div>
    )
}
export default FavCards
