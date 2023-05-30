import React from 'react'
import { Link } from 'react-router-dom'
import './secandCard.scss'
function MainCard({ data }) {
  return (
    <div>
      < div className='sec-card-main'>
        <img src={data.coverPhoto.url}></img>

        <p className='sec-card-titel'> {data.title.slice(0, 45)}... </p>

        <div className='sec-card-price'> <p id='the-price'>{data.price}AED</p>
        
        <p className='location-icon' > <i class="fa-solid fa-location-dot"></i>  {data.location[0].name+','+data.location[1].name} </p>
        </div>
          <div className='sec-card-icon'> 
          <p> <i class="fa-solid fa-bed"></i> {data.rooms} </p>
            <p> <i class="fa-solid fa-bath"></i> {data.baths}  </p>
            <p>  <i class="fa-solid fa-ruler-combined"></i> {Math.floor(data.area)}</p>

        </div >
        <div className='button-cards-sec'> 
          <Link > <button className='sec-card-button'>Details </button></Link>
          <Link > <button className='add-card-button'>ِADD to favorite </button></Link>
            
        </div>
       <div className='main-cards-icons'>
       </div>
        <div className='main-cards-price'>
        {/* <Button variant="primary"> </Button>  */}
        <Link to={`/property/details/:${data.externalId}`}><button > Detalis </button></Link>
       <p>  Price {data.price} AED</p>
        </div>
    </div>
    </div>
  )
}

export default MainCard
