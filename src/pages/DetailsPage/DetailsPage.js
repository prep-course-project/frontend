import Carousel from "react-bootstrap/Carousel";
import "./DetailsPage.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import MainCard from "../../Components/mainCard/mainCard";
function DetailsPage() {
  const { id } = useParams();
  const [data, setdata] = useState();
  const [SameCity, setSameCity] = useState();
  const [loaded, setIsLoaded] = useState(false);
  const [cityIsloaded, setCityIsLoaded] = useState(false);
  const [isClicked,setIsClicked]=useState(false);
  function handleRerender(){
    setIsClicked(prev=>!prev);
  }
  const fetchData = async() => {
    try {
      let responseData=await axios.get(`http://localhost:5000/properites/detail?id=${id}`)
      setdata(responseData.data);
      setIsLoaded(true);
      fetchCity(responseData.data.location[1].externalID)
    } catch (error) {
      console.log(error);
    }
  }
  const fetchCity = async (location) => {
    try {
      const theCity = await axios.get(
        `http://localhost:5000?locationExternalIDs=${location}`
      );
      setSameCity(theCity.data.hits);
      setCityIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0)
  }, [isClicked]);
  const [showInfo, setShowInfo] = useState(false);
  const showMore1 = () => {
    setShowInfo(!showInfo);
  };

  return (
    // <div>
    //    <MainCard data={data}/>
    // </div>

    <div className="main-div-for-detalis">
      {loaded && (
        <div className="top-section">
          <section className="slider">
            <Carousel fade>
              {data.photos.map((item) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.url}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </section>
        </div>
      )}
      {loaded && (
        <div className="contant">
          <section className="allDeitalis">
            <div className="icons">
              <div className="under-photo">
                <p> Price {data.price} AED </p>
                <p id="purpose">{data.purpose.toUpperCase()} </p>
              </div>
              <i class="fa-solid fa-bed"></i> {data.rooms} |{" "}
              <i class="fa-solid fa-bath"></i> {data.baths} |{" "}
              <i class="fa-solid fa-ruler-combined"></i> {Math.floor(data.area)}{" "}
              Sq Ft
            </div>
            {/* <p className='titelP'>{data.title}  </p> */}
            <h6>
              {" "}
              <i class="fa-solid fa-location-dot"></i>{" "}
              {data.location.map((location) => {
                return location.name + " , ";
              })}{" "}
            </h6>
            <div className="test">
              <section className="main-info">
                <div className="contact-info">
                  {" "}
                  <p>
                    {" "}
                    <i class="fa-solid fa-address-book"></i> contcat
                    Information:
                  </p>{" "}
                </div>

                <div className="contact-info1">
                  <p>
                    {" "}
                    <i class="fa-solid fa-user"></i> Owner Name:{" "}
                    {data.contactName}{" "}
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-phone"></i> Phone :{" "}
                    {data.phoneNumber.phone}{" "}
                  </p>
                  <p>
                    {" "}
                    <i class="fa-brands fa-whatsapp"></i> whatsapp:{" "}
                    {data.phoneNumber.whatsapp}
                  </p>
                </div>
              </section>

              <section className="Property-Details">
                <div className="Property-info">
                  {" "}
                  <p>
                    <i class="fa-solid fa-house-chimney"></i> Property Details:
                  </p>{" "}
                </div>

                <div className="Property-info">
                  <p className="upercase">
                    <i class="fa-solid fa-house-signal"></i> states :
                    {data.state}
                  </p>
                  {/* <p> <i class="fa-solid fa-location-dot"></i> {data.location.map(location => {
                                    return (
                                     
                                        location.name + '-'
                                       
                                    )
                                })}    </p> */}
                  <p>
                    {" "}
                    <i class="fa-solid fa-house"></i> purpose : {data.purpose}{" "}
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-ruler-combined"></i> Area:{" "}
                    {Math.floor(data.area)} Sq Ft{" "}
                  </p>
                </div>
              </section>
            </div>
            <div className="Features-div">
              <section className="Features2">
                <div className="Features1">
                  {" "}
                  <p>Features:</p>{" "}
                </div>

                <div className="Features">
                  {data.amenities.map((item) => {
                    return item.amenities.map((Features) => {
                      return (
                        <p>
                          {" "}
                          <i class="fa-solid fa-circle-check"></i>{" "}
                          {Features.text}
                        </p>
                      );
                    });
                  })}
                </div>
              </section>
            </div>
            <div className="main-description">
              <div className="description">
                <h2>Description:</h2>

                <p>
                  {showInfo
                    ? data.description
                    : `${data.description.slice(0, 550)}...`}
                </p>
                <button className="button1" onClick={showMore1}>
                  {showInfo ? "See less" : "See more"}
                </button>
              </div>
            </div>
          </section>

          {data.videos.length && (
            <section className="video-section">
              <p> Video </p>
              <div className="video-div">
                <ReactPlayer
                  controls
                  url={`${data.coverVideo.url}`}
                />
              </div>
            </section>
          )}
          {/* <section className='cards-section'>
                <p id='cards-titel'> Similar Listings</p>
                 <div className='cards-div'>
                 
            
                    <MainCards data={data}/>
                    <MainCards  data={data}/>
                    <MainCards  data={data}/>
               </div>               

            </section> */}
          <section className="cards-section">
            <p className="cards-titel"> Similar Listings</p>
            <div>
              <Swiper
                style={{ width: "100%", marginTop: "100px" }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                {cityIsloaded &&
                  SameCity.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <MainCard
                          data={item}
                          handleRerender={handleRerender}
                          fromDetails='true'
                          style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "contain",
                          }}
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
