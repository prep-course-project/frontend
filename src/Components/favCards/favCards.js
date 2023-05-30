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
                <div className='mx-5'>

                <Link > <button className='button-fav-card'>Remove </button></Link>
                </div>  
               
               
            </div>
        </div>
    )
}


export default FavCards
