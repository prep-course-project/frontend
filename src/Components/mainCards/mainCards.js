
import Card from 'react-bootstrap/Card';
import './mainCards.scss'
function MainCards({data}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.coverPhoto.url} />
      <Card.Body>
        <Card.Title>{data.title} </Card.Title>
        <p  > <i id='location' class="fa-solid fa-location-dot"></i> {data.location[0].name+','+data.location[1].name} </p>
       <div className='main-cards-icons'>
        <p> <i class="fa-solid fa-bed"></i> {data.rooms} </p>
        <p> <i class="fa-solid fa-bath"></i> {data.baths}  </p>
        <p>  <i class="fa-solid fa-ruler-combined"></i> {Math.floor(data.area)}   </p>
       </div>
        <br />
        <br />
        <div className='main-cards-price'>

        {/* <Button variant="primary"> </Button>  */}
        <button> Detalis </button>
       <p>  Price {data.price} AED  </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MainCards;