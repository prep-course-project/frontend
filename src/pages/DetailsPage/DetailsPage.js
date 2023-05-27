import Carousel from 'react-bootstrap/Carousel';
import './DetailsPage.scss'
import data from '../../jaon.json'
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
                        <i class="fa-solid fa-bed"></i> {data.rooms} | <i class="fa-solid fa-bath"></i> {data.baths}  | {data.area} sqft  <i class="fa-solid fa-square"></i> </div>
                    <p className='titelP'>{data.title} </p>

                           <div className='test'>

                    <section className='main-info'>
                            <div className='contact-info'> <p> <i class="fa-solid fa-address-book"></i>contcat Information:</p> </div>
                            
                        <div className='contact-info'>
                            <p> <i class="fa-solid fa-user"></i> Owner Name:{data.contactName}    </p>
                            <p> <i class="fa-solid fa-phone"></i> Phone : {data.phoneNumber.phone} </p>
                            <p> <i class="fa-brands fa-whatsapp"></i> whatsapp: {data.phoneNumber.whatsapp}</p>
                            
                        </div>
                    </section>


                    <section className='Property-Details' >
                            <div className='Property-info'> <p> <i class="fa-solid fa-address-book"></i>Property Details:</p> </div>
                            
                        <div className='Property-info'>
                            <p> <i class="fa-solid fa-location-dot"></i> location:{data.location.map(location =>{
                                return (
                                    location.name+'-'
                                )
                            })}    </p>
                            <p> <i class="fa-solid fa-house"></i> purpose : {data.purpose} </p>
                            <p>  <i class="fa-solid fa-square"></i>Area: {data.area} sqft </p>
                            
                        </div>
                    </section>
                    </div>
                    <div className='Features-div'>
                    <section className='Features'>
                            <div className='Features'> <p> <i class="fa-solid fa-address-book"></i>contcat Information:</p> </div>
                            
                        <div className='Features'>
                            <p> <i class="fa-solid fa-user"></i> Owner Name:{data.contactName}    </p>
                            <p> <i class="fa-solid fa-phone"></i> Phone : {data.phoneNumber.phone} </p>
                            <p> <i class="fa-brands fa-whatsapp"></i> whatsapp: {data.phoneNumber.whatsapp}</p>
                            
                        </div>
                    </section>
                    </div>
                    
                    

                    <div className='description'  >
                        {data.description}
                    </div>
                </section >
            </div>
        </div>
    );
}

export default DetailsPage;