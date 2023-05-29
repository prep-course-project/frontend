import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainCard from '../../Components/mainCard/mainCard';
import './PropertyList.css'
import ToggleCheckbox from './ToggleCheckbox'
export default function PropertyList() {
  const [propertiesList,setPropertiesList]=useState([]);
  const [loadded,setLoaded]=useState(false);
  const {city}=useParams();
  const cities=["Dibba Al-Fujairah","Umm Al Quwain","Fujairah","Ajman","Ras Al Khaimah","Al Ain","Sharjah","Abu Dhabi","Dubai"];
  const roomNums=['1','2','3','4','5'];
  const bathNums=['1','2','3','4'];
  const propertyType=['Apartment','Apartment','Penthouse','Townhouse','Hotel Apartment','Villa Compound','Residential Floor','Residential Building']
  useEffect(()=>{
    if(city){
      axios.get(`/propertyList/city?city=${city}`)
      .then(res=>{
        setPropertiesList(res.data.hits)
        console.log(res)
        setLoaded(true)
        console.log(propertiesList)
      })
      .catch(err=>console.log(err));
    }else {
      axios.get(`${process.env.REACT_APP_URL}`)
      .then(res=>{
        console.log(res)
        setPropertiesList(res.data.hits);
        setLoaded(true);
      })
      .catch(err=>console.log(err))
    }
    
  },[]);
  return (
    <div className='flex flex-col justify-around items-center h-[100%] w-[100%]'>
      <div className='m-auto flex flex-col w-[50%] h-[50px] bg-[#f2f2f2] my-5'>
        <div className='flex'>
        <ToggleCheckbox data={cities}/>
      <ToggleCheckbox data={roomNums}/>
      <ToggleCheckbox data={propertyType}/>
      <ToggleCheckbox data={bathNums}/>
        </div>
        <div className='w-[60%]'>
        <input type="text" className='w-[100%]' />
        </div>
      
      </div>
      <div className='sm:flex sm:flex-col sm:justify-center sm:items-center md:justify-around gap-5  d md:items-start flex-row flex-wrap  w-[100%] h-[100%] '>
      {loadded&&
      propertiesList.map(property=><MainCard data={property}/>)
     }
      </div>
   
     
    </div>
  )
}
