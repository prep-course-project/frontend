import React from 'react'
import { Link } from 'react-router-dom'
import './favCards.scss'
import axios from 'axios'
function FavCards({ data }) {
    let obj1 = {
        area : data.area,
        externalID:data.externalid,
        imgUrl: data.imgurl,
        price:data.price,
        purpose:data.purpose,
        title : data.title
    }
    
    const deleteFav = () =>{
        axios.delete(`http://localhost:5000/favorites`, obj1).then(res =>{
            console.log('delete')
        })
        .catch(err =>console.log('err from delete'))
    }
    return (
        <div className='flex  justify-around'>
            <div className='fav-cards-main '>
                <img src={data.imgurl} alt={'alt'} ></img>
                <p>{data.price}AED</p>
                <p>  {Math.floor(data.area)} Sq Ft </p>
                <p>{data.purpose} </p>
            <div classname = 'fav_detalis'>
              
                <Link > <button className='button-fav-card'><i onClick={deleteFav} class="fa-solid fa-trash-can"></i> </button></Link>
                </div>
               
            </div>
        </div>
    )
}


export default FavCards
