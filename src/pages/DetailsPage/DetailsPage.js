import Carousel from 'react-bootstrap/Carousel';
import './DetailsPage.scss'
import React from 'react';
import ReactPlayer from 'react-player';
import data from '../../jaon.json'
import { Link } from 'react-router-dom';
import MainCards from '../../Components/mainCards/mainCards';
function DetailsPage() {

    return (

        <div className='main-div-for-detalis'>

            <div className='contant'>
                
                <div className='top-section'>
                    <section className="slider">
                        <Carousel fade>
                            {data.photos.map(item => {
                                return (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={item.url}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>

                    </section>
                   
                </div>
                <section className='allDeitalis' >

                    <div className='icons'> <p>  Price {data.price} AED  </p>
                    <p id='purpose'>{data.purpose.toUpperCase()} </p>
                    
                        <i class="fa-solid fa-bed"></i> {data.rooms} | <i class="fa-solid fa-bath"></i> {data.baths}  | {data.area} Sq Ft  <i class="fa-solid fa-square"></i>
                                                 
                         </div>
                    <p className='titelP'>{data.title}  </p>
                    <h6> <i class="fa-solid fa-location-dot"></i> location:{data.location.map(location => {
                                    return (
                                        location.name + ','
                                    )
                                })}    </h6>
                    <div className='test'>

                        <section className='main-info'>
                            <div className='contact-info'> <p> <i class="fa-solid fa-address-book"></i>contcat Information:</p> </div>

                            <div className='contact-info'>
                                <p> <i class="fa-solid fa-user"></i> Owner Name: {data.contactName}    </p>
                                <p> <i class="fa-solid fa-phone"></i> Phone : {data.phoneNumber.phone} </p>
                                <p> <i class="fa-brands fa-whatsapp"></i> whatsapp: {data.phoneNumber.whatsapp}</p>

                            </div>
                        </section>


                        <section className='Property-Details' >
                            <div className='Property-info'> <p> Property Details:</p> </div>

                            <div className='Property-info'>
                                <h6> <i class="fa-solid fa-location-dot"></i> location:{data.location.map(location => {
                                    return (
                                        location.name + '-'
                                    )
                                })}    </h6>
                                <p> <i class="fa-solid fa-house"></i> purpose : {data.purpose} </p>
                                <p>  <i class="fa-solid fa-square"></i>Area: {data.area} Sq Ft </p>

                            </div>
                        </section>
                    </div>
                    <div className='Features-div'>
                        <section className='Features2'>
                            <div className='Features1'> <p>Features:</p> </div>

                            <div className='Features'>
                                {data.amenities.map(item => {
                                    return (
                                        item.amenities.map(Features => {
                                            return (
                                                <p> <i class="fa-solid fa-circle-check"></i> {Features.text}</p>

                                            )
                                        })

                                    )
                                })}

                            </div>
                        </section>
                    </div>



                    <div className='main-description' >
                    
                        
                        <div className='description'> 
                        <h2>Description:</h2>
                        {data.description.slice(0, 550)}
                            <Link>...Read more</Link>
                        </div>
                    </div>
                </section >
            <section className='video-section'>
                    <p> Video </p>
                <div className='video-div'>
                <ReactPlayer controls  url='https://www.youtube.com/watch?v=uMQnn8xU7qs'/>
                </div>
                
            </section>
            <section className='cards-section'>
                <p id='cards-titel'> Similar Listings</p>
                 <div className='cards-div'>
                    <MainCards data={data}/>
                    <MainCards  data={data}/>
                    <MainCards  data={data}/>
               </div>               

            </section>
            
          
            </div>
        </div>
    );
}

export default DetailsPage;