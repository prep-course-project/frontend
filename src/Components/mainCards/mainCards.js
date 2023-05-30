import React from 'react';
import Card from 'react-bootstrap/Card';
import './mainCards.scss'
import { Link } from 'react-router-dom';
function MainCards({data}) {
  return (
    <Card style={{ width: '18rem',height:'500px',minHeight:'500px',marginBottom:'100px'}}>
      <Card.Img style={{width:'100%',height:'220px',minHeight:'220px'}} variant="top" src={data.coverPhoto.url} />
      <Card.Body >
        <Card.Title style={{minHeight:'100px'}}>{data.title} </Card.Title>
      <div className='my-1'> 
        <p  > <i id='location' class="fa-solid fa-location-dot"></i> 
        {data.location[0].name+','+data.location[1].name} </p>
      </div> 
       <div className='main-cards-icons my-1'>
        <p> <i class="fa-solid fa-bed"></i> {data.rooms} </p>
        <p> <i class="fa-solid fa-bath"></i> {data.baths}  </p>
        <p>  <i class="fa-solid fa-ruler-combined"></i> {Math.floor(data.area)}</p>
       </div>
        <section className='card-body'> 
       
        <div className='main-cards-price'>
        <Link to={`/property/details/${data.externalID}`} className='w-[]'><button> Detalis </button></Link>
        </div>
        <p  className='my-3 font-bold'>  Price {data.price} AED</p>
        </section>
      </Card.Body>
    </Card>
  );
}

export default MainCards;