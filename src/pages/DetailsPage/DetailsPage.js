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
import ReactStars from "react-rating-stars-component";
import Test from "../PropertyList/Test";
function DetailsPage() {
  const { id } = useParams();
  const [data, setdata] = useState();
  const [SameCity, setSameCity] = useState();
  const [loaded, setIsLoaded] = useState(false);
  const [cityIsloaded, setCityIsLoaded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false)
  function handleRerender() {
    setIsClicked(prev => !prev);
  }
  const fetchData = async () => {
    try {
      let responseData = await axios.get(`${process.env.REACT_APP_URL}/properites/detail?id=${id}`)
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
        `${process.env.REACT_APP_URL}?locationExternalIDs=${location}`
      );
      setSameCity(theCity.data.hits);
      setCityIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // fetchcomment()
    window.scrollTo(0, 0)
  }, [isClicked]);
  const [showInfo, setShowInfo] = useState(false);
  const showMore1 = () => {
    setShowInfo(!showInfo);
  };

  const [allcomment, setAllcomment] = useState([])
  const fetchcomment = async () => {
    try {
      let responseData = await axios.get(`${process.env.REACT_APP_URL}/comment/${id}`)
      setAllcomment(responseData.data);
      console.log(allcomment)
    } catch (error) {
      console.log(error);
    }
  }




  const [newRate, setNewRate] = useState()
  const Addcomment = (e) => {
    e.preventDefault();
    setIsUpdated(false);


    const obj = {
      ownerName: e.target.Name.vlaue,
      Email: e.target.Email.vlaue,
      comment: e.target.Email.vlaue,
      Rating: newRate,
    }
    axios.post(`${process.env.REACT_APP_URL}/comment/${id}`, obj)
      .then(res => {
        console.log(res)

      }).catch(err => console.log(err))
  }
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setNewRate(newRating)

  };

  return (

    <>
    {loaded && (

    <div className="main-div-for-detalis">
     

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
      

      

        <div className="div-for-two-sides">



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

                  <div className="Property-info1">
                    <p className="upercase">
                      <i class="fa-solid fa-house-signal"></i> states :
                      {data.state}
                    </p>

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
            <section style={{ color: '#000', backgroundColor: '#f3f2f2' }} >
              <div class="container py-5">
                <div class="row d-flex justify-content-center">
                  <div class="col-md-10 col-xl-8 text-center">
                    <h3 class="fw-bold mb-4">Testimonials</h3>
                    <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                      numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                      quisquam eum porro a pariatur veniam.
                    </p>
                  </div>
                </div>
              { allcomment.map((review) => {
                  return (




                    <div class="row text-center">
                      <div class="col-md-4 mb-4 mb-md-0" className='main-revie-div'>
                        <div class="card">
                          <div class="card-body py-4 mt-2"
                            className="inside-card">
                            <div class="d-flex justify-content-center mb-4">
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                class="rounded-circle shadow-1-strong" width="100" height="100" />
                            </div>
                            <h5 class="font-weight-bold">{review.Name}</h5>
                            <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={25}
                              activeColor="#ffd700"
                              value={4}
                              edit={false}

                            />
                            <h6 class="font-weight-bold my-3">{review.Email}</h6>

                            <p class="mb-2">
                              <i class="fas fa-quote-left pe-2"></i>{review.commint}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  )
                })}
                
              </div>
            </section>
          </div>

          <section className="side-section-detalis">
            <Test data={data} />
            <section className='Form-section-detalis'>
              <form onSubmit={Addcomment} className="rating-form-detalis">
                <p id='review'>Add Review</p>

                <label> Your Name</label>
                <input id='Name' type="text"></input>
                <label> Email</label>
                <input id='Email' type="email"></input>
                <label> commint</label>
                <textarea id='commint'></textarea>
                <p> How was your experience? </p>
                <div className="stars">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={42}
                    activeColor="#ffd700"

                  />
                </div>
                <button type="submit"> Submit</button>
              </form>
            </section>
          </section>
        </div>
      
    </div>
    )}
    </>
  );
}

export default DetailsPage;
