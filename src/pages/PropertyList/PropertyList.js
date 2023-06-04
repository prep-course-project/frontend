import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MainCard from "../../Components/mainCard/mainCard";
import FilterSection from "./FilterSection/FilterSection";
import "./PropertyList.scss";
import "./PropertyList.css";
import { initialFilter,propertyTypeList,cities } from "./propertyConstants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function PropertyList() {
  const [propertiesList, setPropertiesList] = useState([]);
  const [loadded, setLoaded] = useState(false);
  const { city,purpose } = useParams();
  const [filterState, setFilterState] = useState(initialFilter);
  const [searchValue, setSearchValue] = useState(getCityName(city)||'All');
  const errorToast=(message)=> toast.error(message);
  const successToast=(messaage)=>toast(messaage);
  function handleChange(type, payload) {
    let updatedValue = {};
    updatedValue = { [`${type}`]: payload };
    setFilterState((prevFilter) => ({
      ...prevFilter,
      ...updatedValue,
    }));
    if(payload==='All'){
    setSearchValue('All')
    }
   else  if(type==='city'){
    setSearchValue(getCityName(payload));
   }else if(type==='propertyType'){
     let targetProperty=propertyTypeList.filter(e=>e.ApiQuery==payload)[0];
     console.log(targetProperty)
     setSearchValue(`${targetProperty.type}`)
   }
  }
  function getCityName(cityParameter){
    if(city){
      let targetCity;
      targetCity= cities.filter(e=>e.slice(e.length-4,e.length)==cityParameter)[0];
      console.log(targetCity,'in get city')
      targetCity=targetCity.slice(0,targetCity.length-4)
      return targetCity
    }
  }
  const [loding , setLoding] = useState(false)
  function handleGetAllProperties(url = process.env.REACT_APP_URL) {
    setLoding(true)
    axios
      .get(`${url}`)
      .then((res) => {
        setPropertiesList(res.data.hits);
        setLoding(false)
        console.log(res);
        if (res.data.hits.length) {
          setLoaded(true);
        } else {
        }
      })
      .catch((err) => errorToast(err));
  }

  useEffect(() => { 
    if (city) {
      let updatedValue = {};
      updatedValue = { [`city`]: city };
      setFilterState((prevFilter) => ({
        ...prevFilter,
        ...updatedValue,
      }));
      handleGetAllProperties(
        `${process.env.REACT_APP_URL}?locationExternalIDs=${city}`
      );
    }else if(purpose){
      let updatedValue = {};
      updatedValue = { [`purpose`]: purpose };
      setFilterState((prevFilter) => ({
        ...prevFilter,
        ...updatedValue,
      }));
      setSearchValue(purpose)
      handleGetAllProperties(
        `${process.env.REACT_APP_URL}?purpose${purpose}`
      );
    } else {
      handleGetAllProperties();
    }
    window.scrollTo(0,0)
  }, []);
  useEffect(() => {
    if(loadded){
      let extraQuerie = `locationExternalIDs=${filterState.city}&minRooms=${filterState.roomsMin}&maxrooms=${filterState.roomsMax}&minBaths=${filterState.bathMin}&maxBaths=${filterState.bathMax}&priceMin=${filterState.priceMin}&priceMax=${filterState.priceMax}&categoryExternalID=${filterState.propertyType}&purpose=${filterState.purpose}`;
      handleGetAllProperties(`${process.env.REACT_APP_URL}?${extraQuerie}`);
    }

  }, [filterState]);

  return (
    <div className="propertyList__main">

      <div className="property__filterCont">
        
    {
        loding && 
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      }
        <div className="">
          <FilterSection handleChange={handleChange} />
        </div>
        <h2>
          Showing Result for :{" "}
          <span className="property__searchVal">{searchValue}</span>
        </h2>
      </div>
      <div className="propertyList__cards">
        {loadded &&
          propertiesList.map((property) => (
            <MainCard key={property.id} errorToast={errorToast} successToast={successToast} data={property} />
          ))}
      </div>
 
      <ToastContainer 
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  );
}
