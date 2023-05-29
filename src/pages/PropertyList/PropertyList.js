import React, { useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainCard from '../../Components/mainCards/mainCards';
import './PropertyList.css'
import ToggleCheckbox from './ToggleCheckbox'
import filterReducer from '../../services/FilterReducer'
import { initialFilter,cities,propertyTypeList,roomAndBathNumberList,pricesList,agenciesList } from './propertyConstants';
export default function PropertyList() {
  const [propertiesList,setPropertiesList]=useState([]);
  const [loadded,setLoaded]=useState(false);
  const {city,agency}=useParams();
  const [filterValues,setFormValues]=useReducer(filterReducer,initialFilter)
   function handleChange(type, payload) {
    console.log(type,payload,'in change')
    setFormValues({
      type: type,
      payload: payload,
    });
    handleFilteration(type,payload)
  }
  function handleGetAgencyListings(url){
    axios.get(url)
    .then(res=>{
      setPropertiesList(res.data.hits)
      setLoaded(true);
      console.log(res.data.hits,'get agenct')
    })
    .catch(err=>console.log(err))
  }
  function handleGetAllProperties(url=process.env.REACT_APP_URL){
    axios.get(`${url}`)
      .then(res=>{
        setPropertiesList(res.data.hits);
        setLoaded(true);
        console.log(res.data.hits,'get all')
      })
      .catch(err=>console.log(err))
    }
    function handleGetPropertiesByCity(city){
      axios.get(`/propertyList/autoComplete?q=${city}`)
      .then(res=>{
        setPropertiesList(res.data.hits)
        setLoaded(true)
        console.log(res.data.hits,'get in city')
      })}
    useEffect(()=>{
      if(city){
       handleGetPropertiesByCity(city)
        }else if(agency) {
          handleGetAgencyListings(agency)
    }
    else handleGetAllProperties();
  },[]);
    function handleFilteration(type,value){
      let extraQuerie=`&minRooms${initialFilter.minRooms}&maxrooms=${initialFilter.maxRooms}&minBaths=${initialFilter.minBaths}&priceMin=${initialFilter.priceMin}&priceMax=${initialFilter.priceMax}&categoryExternalID=${initialFilter.propertyType}`
      setLoaded(false)
        switch(type){
          case 'filterCity':{
            handleGetAllProperties(`${process.env.REACT_APP_URL}?locationExternalIDs=${value}&${extraQuerie}`)
            break;
          }
          case 'filterPropertyType':{
            handleGetAllProperties(`${process.env.REACT_APP_URL}?categoryExternalID=${value}&${extraQuerie}`)
            break;
          }
          case 'minRooms':{
            handleGetAllProperties(`${process.env.REACT_APP_URL}?roomsMin=${value}&${extraQuerie}`)
            break;
          }
          case 'maxRooms':{
            handleGetAllProperties(`${process.env.REACT_APP_URL}?roomsMax=${value}&${extraQuerie}`)
            break;
          }
          case 'priceMin':{
            handleGetAllProperties(`${process.env.REACT_APP_URL}?priceMin=${value}&${extraQuerie}`)
            break;
          }
          case 'priceMax':{
            handleGetAllProperties(`${process.env.REACT_APP_URL}?priceMax=${value}&${extraQuerie}`)
            break;
          }
        case 'filterAgency':{
          handleGetAgencyListings(`${process.env.REACT_APP_URL}/autoComplete?q=${value}&${extraQuerie}`)
          break;
        }
          default :handleGetAllProperties()
        }

    }
    return (
      <div className='flex flex-col justify-center items-center h-[100%] w-[100%]'>
        <div className='m-auto flex flex-col justify-around pt-1 w-[50%] h-[100px] bg-[#f2f2f2] my-5'>
          <div className='flex'>
          <ToggleCheckbox handleChange={handleChange} actionType='filterCity' data={cities} checkHeading='City'/>
        <ToggleCheckbox handleChange={handleChange}   actionType='filterPropertyType' data={propertyTypeList} checkHeading='Property Type'/>
        <ToggleCheckbox handleChange={handleChange}   actionType='minBaths' data={roomAndBathNumberList} checkHeading='Min Baths'/>
        <ToggleCheckbox handleChange={handleChange}   actionType='maxBaths' data={roomAndBathNumberList} checkHeading='Max Baths'/>
        <ToggleCheckbox handleChange={handleChange}   actionType='minRooms' data={roomAndBathNumberList} checkHeading='Min Rooms'/>
        <ToggleCheckbox handleChange={handleChange}  actionType='maxRooms'  data={roomAndBathNumberList} checkHeading='Max Rooms'/>
        <ToggleCheckbox handleChange={handleChange}   actionType='priceMin' data={pricesList} checkHeading='Min Price'/>
        <ToggleCheckbox handleChange={handleChange}   actionType='priceMax' data={pricesList} checkHeading='Max Price'/>
        <ToggleCheckbox handleChange={handleChange}  actionType='filterAgency'  data={agenciesList} checkHeading='Agency'/>
          </div>
          <div className='w-[60%] m-auto'>
          <input type="text" className='w-[100%] h-[40px] rounded-md border-black p-2 bg-[#fefefe] text-lg font-semiBold opacity-80 relative bottom-[-50%]' placeholder='Search' />
          </div>
        </div>
        <div className='sm:flex sm:flex-col sm:justify-center sm:items-center md:justify-around gap-5  d md:items-start flex-row flex-wrap  w-[100%] h-[100%] '>
        {loadded&&
        propertiesList.map(property=><MainCard key={property.id} data={property}/>)
       }
        </div>
      </div>
    )
  }


