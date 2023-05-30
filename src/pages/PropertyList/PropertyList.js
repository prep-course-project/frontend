import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MainCard from "../../Components/mainCard/mainCard";
import FilterSection from "./FilterSection/FilterSection";
import "./PropertyList.scss";
import { initialFilter,propertyTypeList,cities } from "./propertyConstants";
export default function PropertyList() {
  const [propertiesList, setPropertiesList] = useState([]);
  const [loadded, setLoaded] = useState(false);
  const { city } = useParams();
  let targetCity
  if(city){
    targetCity= cities.filter(e=>e.slice(e.length-4,e.length)==city)[0]
  }
  const [filterState, setFilterState] = useState(initialFilter);
  cities.filter(e=>e.slice)
  const [searchValue, setSearchValue] = useState(targetCity?.slice(0,targetCity.length-4)||'All');
  function handleChange(type, payload) {
    let updatedValue = {};
    updatedValue = { [`${type}`]: payload };
    setFilterState((prevFilter) => ({
      ...prevFilter,
      ...updatedValue,
    }));
    if(payload=='All'){
    setSearchValue((prev)=>({...prev,payload}))
    }
   else if(type==='city'){
     let targetCity= cities.filter(e=>e.slice(e.length-4,e.length)==payload)[0];
     setSearchValue(`${targetCity.slice(0,targetCity.length-4)}`);
    }else if(type==='propertyType'){
      let targetProperty=propertyTypeList.filter(e=>e.ApiQuery==payload)[0];
      console.log(targetProperty)
      setSearchValue(`${targetProperty.type}`)
    }
  }
  function handleGetAllProperties(url = process.env.REACT_APP_URL) {
    axios
      .get(`${url}`)
      .then((res) => {
        setPropertiesList(res.data.hits);
        console.log(res);
        if (res.data.hits.length) {
          setLoaded(true);
        } else {
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (city) {
      let updatedValue = {};
      updatedValue = { [`city`]: city };
      console.log('in city handle')
      setFilterState((prevFilter) => ({
        ...prevFilter,
        ...updatedValue,
      }));
      handleGetAllProperties(
        `${process.env.REACT_APP_URL}?locationExternalIDs=${city}`
      );
    } else {
      handleGetAllProperties();
    }
  }, []);
  useEffect(() => {
    if(loadded){
      let extraQuerie = `locationExternalIDs=${filterState.city}&minRooms=${filterState.minRooms}&maxrooms=${filterState.maxRooms}&minBaths=${filterState.minBaths}&priceMin=${filterState.priceMin}&priceMax=${filterState.priceMax}&categoryExternalID=${filterState.propertyType}`;
      handleGetAllProperties(`${process.env.REACT_APP_URL}?${extraQuerie}`);
    }

  }, [filterState]);

  return (
    <div className="propertyList__main">
      <div className="property__filterCont">
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
            <MainCard key={property.id} data={property} />
          ))}
      </div>
    </div>
  );
}
