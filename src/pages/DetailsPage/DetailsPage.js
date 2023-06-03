import Carousel from "react-bootstrap/Carousel";
import "./DetailsPage.scss";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import MainCard from "../../Components/mainCard/mainCard";
import ReactStars from "react-rating-stars-component";
import Test from "../PropertyList/Test";
import personal from './personal.png'
function DetailsPage() {
  const { id } = useParams();
  const [data, setdata] = useState();
  const [SameCity, setSameCity] = useState();
  const errorToast = (message) => toast.error(message);
  const successToast = (messaage) => toast(messaage);
  const [loaded, setIsLoaded] = useState(false);
  const [cityIsloaded, setCityIsLoaded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false)
  function handleAddToFavorite() {
    let addBody = {
      title: data.title,
      externalID: data.externalID,
      price: data.price,
      imgUrl: data.coverPhoto.url,
      area: data.area,
      purpose: data.purpose
    }
    axios.post(`${process.env.REACT_APP_URL}/favorites`, addBody)
      .then(res => {
        successToast('Property Added to favorite')
      })
      .catch(err => errorToast('Something went wrong,'))
  }
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
    fetchcomment()
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
    } catch (error) {
      console.log(error);
    }
  }




  const [newRate, setNewRate] = useState()

  const Addcomment = (e) => {
    e.preventDefault();
    setIsUpdated(false);
    console.log(e.target.Name.value, "from rivew")


    const obj = {
      commentName: e.target.Name.value,
      Email: e.target.Email.value,
      comment: e.target.comment.value,
      Rating: newRate,
    }
    axios.post(`${process.env.REACT_APP_URL}/comment/${id}`, obj)
      .then(res => {
        let newComments = allcomment;
        newComments.push(res.data[0])
        console.log(res.data[0])
        setAllcomment(newComments)
        console.log(allcomment)

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
                        <i class="fa-solid fa-user"></i> Owner Name:{" "}<span className="not-bold-detalis">
                        {data.contactName}{" "}</span>
                      </p>
                      <p>
                        {" "}
                        <i class="fa-solid fa-phone"></i> Phone :{" "}<span className="not-bold-detalis">
                        {data.phoneNumber.phone}{" "}</span>
                      </p>
                      <p>
                        {" "}
                        <i class="fa-brands fa-whatsapp"></i> whatsapp:{" "}<span className="not-bold-detalis">
                        {data.phoneNumber.whatsapp}</span>
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
                        <i class="fa-solid fa-house-signal"></i> states :<span className="not-bold-detalis">
                        {data.state}</span>
                      </p>

                      <p>
                        {" "}
                        <i class="fa-solid fa-house"></i> purpose : <span className="not-bold-detalis">{data.purpose}{" "}</span>
                      </p>
                      <p>
                        {" "}
                        <i class="fa-solid fa-ruler-combined"></i> Area:{" "}<span className="not-bold-detalis">
                        {Math.floor(data.area)} Sq Ft{" "}</span>
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

              {data.videos.length > 0 && (
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
                <div className='similar-div'>
                  <Swiper
                    style={{ width: "100%", marginTop: "10px", height: '90%' }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
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

              <section className="review-section">
                <div className="main-div-review">
                  <h3>Rivews</h3>
                  <div className="under-header">
                    <div className="review-cards">
                      {allcomment.map((review) => {
                        return (

                          <div class="card-body py-4 mt-2"
                            className="inside-card">
                            <div class="d-flex justify-content-center mb-4">
                              <img src={personal}
                                class="rounded-circle shadow-1-strong" width="100" height="100" />
                            </div>
                            <h5 class="font-weight-bold">{review.commentname}</h5>
                            <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={25}
                              activeColor="#ffd700"
                              value={review.rating}
                              edit={false}

                            />
                            <h6 class="font-weight-bold my-3">{review.email}</h6>

                            <p class="mb-2">
                              <i class="fas fa-quote-left pe-2"></i>{review.comment}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="side-section-detalis">
              <div className='button-cards-sec1'>
                <Link onClick={() => handleAddToFavorite()} > <button className='add-card-button1'>ِADD to favorite </button></Link>
              </div>
              <Test data={data} />
              <section className='Form-section-detalis'>
                <form onSubmit={Addcomment} className="rating-form-detalis">
                  <p id='review'>Add Review</p>

                  <label> Your Name</label>
                  <input id='Name' type="text"></input>
                  <label> Email</label>
                  <input id='Email' type="email"></input>
                  <label> Your Comment</label>
                  <textarea style={{ paddingLeft: '15px' }} id='comment'></textarea>
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
