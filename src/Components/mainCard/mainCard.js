import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './secandCard.scss'
import axios from 'axios'
function MainCard({ data }) {

// {
//   "externalid": 7329447,
//   "price": 2023,
//   "title": "anything anything anything anything anything anything anything ",
//   "imgurl": "http://google.com.png",
//   "area": "farah",
//   "purpose": "testing"
// }

console.log(data);

let obj = {
    area : data.area,
    externalID:data.externalID,
    imgUrl: data.coverPhoto.url,
    price:data.price,
    purpose:data.purpose,
    title : data.title
}
  const addFavorite = () => {
    axios.post(`https://real-estate-back-end.onrender.com/favorites` , obj)
    .then(result => console.log( result.data) , )
    .catch(err => console.log('error post fav'))
  }


  return (
     <Link to={`/property/details/${data.externalID}`} style={{textDecoration:'none',color:"black"}}>
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
          <Link > <button className='add-card-button' onClick={addFavorite}>ِADD to favorite </button></Link>
            
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
