import React, { useEffect, useState } from 'react'
import './Favorite.scss'
import FavCards from '../../Components/favCards/favCards'
import axios from 'axios'
export default function Favorite({data}) {
let count = 0
  const [getFave , setGetFave] = useState([])
  const getFavorite = async () => {
    try{
      const res =  await axios.get(`https://real-estate-back-end.onrender.com/favorites`)
      console.log(res.data)
      setGetFave(res.data)
    }catch(err){
      console.log('favorite page error');
    }
  }

  useEffect(() =>{
    getFavorite()
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
      {
        getFave.map(item => {

         return <FavCards key={count++} data={item}/>
        })
      }

        </section>
    </div>
  )
}
