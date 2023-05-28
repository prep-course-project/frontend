import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MainCards({data}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.coverPhoto.url} />
      <Card.Body>
        <Card.Title>{data.title} </Card.Title>
        <Card.Text>
        <p> <i class="fa-solid fa-house"></i> purpose : {data.purpose} </p>
        </Card.Text>
        <Button variant="primary">More detalis</Button>
      </Card.Body>
    </Card>
  );
}

export default MainCards;