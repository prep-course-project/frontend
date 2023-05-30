import React from 'react'
import { Link } from 'react-router-dom'
import './favCards.scss'
function FavCards({ data }) {
    return (
        <div className='flex  justify-around'>
            <div className='fav-cards-main '>
                <img src={data.coverPhoto.url}></img>
                <p>{data.price}AED</p>
                <p>  {Math.floor(data.area)} Sq Ft </p>
                <p>{data.purpose} </p>
            <div classname = 'fav_detalis'>
              
                <Link > <button className='button-fav-card'><i class="fa-solid fa-trash-can"></i> </button></Link>
            
                </div>
               
            </div>
        </div>
    )
}


export default FavCards
