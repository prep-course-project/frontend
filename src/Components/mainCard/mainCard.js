
import Card from 'react-bootstrap/Card';
import './mainCards.scss'
function MainCard({data}) {
  return (
    <Card style={{ width: '350px',height:'450px',minWidth:'350px',minHeight:'450px' }} className='main__card'>
      <Card.Img style={{ width: '100%',height:'60%',minWidth:'100%',minHeight:'60%',maxHeight:'60%',maxWidth:'100%' }}  variant="top" src={data.coverPhoto.url} />
      <Card.Body>
        <Card.Title>{data.title} </Card.Title>
       <div className='main-cards-icons'>
       </div>
        <br />
        <br />
        <div className='main-cards-price'>
        {/* <Button variant="primary"> </Button>  */}
        <button> Detalis </button>
       <p>  Price {data.price} AED</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MainCard;