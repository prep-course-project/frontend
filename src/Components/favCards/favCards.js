import React from 'react'
import { Link } from 'react-router-dom'
import './favCards.scss'
function FavCards({ data }) {
    return (
        <div>
            <div className='fav-cards-main'>
                <img src={data.coverPhoto.url}></img>
            
               
                {/* <p className='fav-card-titel'>{data.title.slice(0,20)} </p> */}

                <p>{data.price}AED</p>
                <p>  {Math.floor(data.area)} Sq Ft </p>

                <p>{data.purpose} </p>
                <div className='main-cards-price'>

                <Link > <button className='button-fav-card'>Remove </button></Link>
                </div>  
               
               
            </div>
        </div>
    )
}


export default FavCards
