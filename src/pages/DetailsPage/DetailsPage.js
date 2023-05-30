import Carousel from 'react-bootstrap/Carousel';
import './DetailsPage.scss'
import React ,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
// import ReactPlayer from 'react-player';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import data from '../../jaon.json'
import { Link } from 'react-router-dom';
import MainCards from '../../Components/mainCards/mainCards';
import FavCards from '../../Components/favCards/favCards'; 
function DetailsPage() {
    const { id } = useParams()
    // console.log(id)
    
    // const [data,setdata]=useState()  
    const [SameCity,setSameCity]=useState()  

    const [loaded,setIsLoaded]=useState(false)
    const [citLloaded,setCityIsLoaded]=useState(false)

     
        // const fetchData = async () =>{
        //     try{
        //     const cityData= await axios.get(`http://localhost:5000/properites/detail?id=6787227`)
        //     setdata(cityData.data)
        //     console.log(cityData.data)
        //     setIsLoaded(true)
        //     fetchCity()
        //     }catch(error){
        //         console.log(error)
        //     }
        // } 
        // const fetchCity = async () =>{
        //     // const citylocation =data.location[1]
        //     try{
        //         const theCity= await axios.get(`http://localhost:5000/propertyList/city?city=Dubia`)
        //         setSameCity(theCity.data.hits)
        //         console.log(theCity)
        //     setCityIsLoaded(true)
        //     }catch(error){
        //         console.log(error)
        //     }
        // } 
        
        // useEffect(() => {
        //     fetchData();
            
        // }, [])

    return (

        <div className='main-div-for-detalis'>
           
        {/* {loaded && ( */}

           
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
                    
                        <i class="fa-solid fa-bed"></i> {data.rooms} | <i class="fa-solid fa-bath"></i> {data.baths}  | <i class="fa-solid fa-ruler-combined"></i> {Math.floor(data.area)} Sq Ft  
                                                 
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
                                <p>  <i class="fa-solid fa-ruler-combined"></i> Area: {data.area} Sq Ft </p>

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
            
            {/* { data.videos.length && (

            <section className='video-section'>
                    <p> Video </p>
                <div className='video-div'>
                <ReactPlayer controls  url='https://www.youtube.com/watch?v=uMQnn8xU7qs'/>
                </div>
                
            </section>

            )} */}
            <section className='cards-section'>
                <p id='cards-titel'> Similar Listings</p>
                 <div className='cards-div'>
                 
            
                    <MainCards data={data}/>
                    <MainCards  data={data}/>
                    <MainCards  data={data}/>
               </div>               

            </section>
            <section className='cards-section'>
                    {/* <p id='cards-titel'> Similar Listings</p> */}
                    <div className='cards-div'>
                        
                    </div>
                    
                    <div>
                  
 
                     
{/*                          

                        <Swiper
                            style={{ width: "700px", marginTop: "100px" }}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={10}
                            slidesPerView={3.5}
                            navigation
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                        {citLloaded && ( SameCity.map(item =>{
                            return (

                                <SwiperSlide key={item.id}><MainCards data={item} style={{width:"100%", height:"250px" , objectFit:"contain"}}/></SwiperSlide>
                            )
                        }))}
                           
                          
                        </Swiper> */}
                            {/* <FavCards data={data}/> */}
                    </div>
                </section>
          
            </div>
            {/* )} */}
        </div>
       
    );
}

export default DetailsPage;