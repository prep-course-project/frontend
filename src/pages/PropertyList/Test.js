import { GoogleMap, LoadScript,Marker ,useJsApiLoader,} from '@react-google-maps/api';
import React, { useState } from 'react'
import './Test.scss'



function Test({data}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDeqmOQPJjA_Pg3u-cnJuyCljSqh1EvIs4"
  })
  const x =data.geography.lat
  const y =data.geography.lng
  console.log(x,y)
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds({lat:x,lng:y});
    map.fitBounds(bounds);
    setMap(map)
  }, [])

 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  const containerStyle = {
    width: '350px',
    height: '400px'
  };
 const [nextZoom ,setNextZoom]=useState(13)
  //  const center = {
  //     lat:{data.geography.lat},
  //     lng: {data.geography.lng}
  //   };
  return isLoaded ? (
    <div style={{justifyContent:'space-around',display:'flex' ,flexDirection:'column',alignItems:'center',height:'450px'}}> 
      <button onClick={()=>{ setNextZoom(15)}}> Show Location</button>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{lat:x,lng:y}}
      zoom={nextZoom}
      onLoad={onLoad}
      onUnmount={onUnmount} >
      <Marker position={{lat:x,lng:y}} />
      <></>
    </GoogleMap>
    </div>
) : <></>
}

export default React.memo(Test)