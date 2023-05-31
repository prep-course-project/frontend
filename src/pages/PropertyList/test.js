import React from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
    lat: 24.393264,
    lng: 54.513441
  };

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDeqmOQPJjA_Pg3u-cnJuyCljSqh1EvIs4"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
             <Marker position={center}/>

        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)