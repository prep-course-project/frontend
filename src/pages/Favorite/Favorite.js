import React from 'react'
import './Favorite.scss'
import FavCards from '../../Components/favCards/favCards'
export default function Favorite({data}) {
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
        <FavCards  data={data}/>
        <FavCards  data={data}/>
        <FavCards  data={data}/>
        <FavCards  data={data}/>

        </section>
    </div>
  )
}
