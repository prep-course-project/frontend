import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function PropertyList() {
  const [propertiesList,setPropertiesList]=useState([]);
  console.log(process.env)
  useEffect(()=>{
    console.log(process.env.REACT_APP_URL)
  axios.get(`${process.env.REACT_APP_URL}`)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  },[]);
  return (
    <div>
      
    </div>
  )
}
