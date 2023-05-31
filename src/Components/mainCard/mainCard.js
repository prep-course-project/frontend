import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './secandCard.scss'
import axios from 'axios'
function MainCard({ data,handleRerender,fromDetails,successToast,errorToast }) {
  function handleAddToFavorite(){
    let addBody={
      title:data.title,
      externalID:data.externalID,
      price:data.price,
      imgUrl:data.coverPhoto.url,
      area:data.area,
      purpose:data.purpose
    }
    axios.post(`${process.env.REACT_APP_URL}/favorites`,addBody)
    .then(res=>{
      successToast('Property Added to favorite')
    })
    .catch(err=>errorToast('Something went wrong,'))
  }
  return (
     <Link onClick={fromDetails?()=>handleRerender():null} to={`/property/details/${data.externalID}`} style={{textDecoration:'none',color:"black"}}>
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
          <Link to={`/property/details/${data.externalID}`} > <button className='sec-card-button'>Details </button></Link>
          <Link onClick={()=>handleAddToFavorite()} > <button className='add-card-button'>ِADD to favorite </button></Link>
            
        </div>
       <div className='main-cards-icons'>
       </div>
        <div className='main-cards-price'>
        {/* <Button variant="primary"> </Button>  */}
       
        </div>
    </div>
    </div>
     </Link>
  )
}

export default MainCard
