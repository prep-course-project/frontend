import React, { useState } from 'react'
import ToggleCheckbox from '../ToggleCheckbox'
import './FilterSection.scss'
import { cities,propertyTypeList,roomAndBathNumberList,pricesList,areas,purpose} from '../propertyConstants';

function FilterSection({handleChange}) {
    const [showMoreFilter,setShowMoreFilter]=useState(false);
  return (
    <div className='property__filters'>
        <div className={`${showMoreFilter?'show__AllFilters':'hide__filters'} `}>
        <ToggleCheckbox  handleChange={handleChange}   actionType='city'         data={cities} checkHeading='City' />
        <ToggleCheckbox  handleChange={handleChange}   actionType='propertyType' data={propertyTypeList} checkHeading='Property Type'/>
        <ToggleCheckbox  handleChange={handleChange}   actionType='minBaths'     data={roomAndBathNumberList} checkHeading='Min Baths'/>
        <ToggleCheckbox  handleChange={handleChange}   actionType='maxBaths'     data={roomAndBathNumberList} checkHeading='Max Baths'/>
        <ToggleCheckbox  handleChange={handleChange}   actionType='minRooms'     data={roomAndBathNumberList} checkHeading='Min Rooms'/>
        <ToggleCheckbox  handleChange={handleChange}   actionType='maxRooms'     data={roomAndBathNumberList} checkHeading='Max Rooms'/>
        <ToggleCheckbox  handleChange={handleChange}   actionType='priceMin'     data={pricesList} checkHeading='Min Price'/>
        <ToggleCheckbox  handleChange={handleChange}   actionType='priceMax'     data={pricesList} checkHeading='Max Price'/>
        <ToggleCheckbox  handleChange={handleChange}   actionType='areaMin'      data={areas} checkHeading='Min Area'/>
        <ToggleCheckbox  handleChange={handleChange}   actionType='areaMax'      data={areas} checkHeading='Max Area'/>
        <ToggleCheckbox  handleChange={handleChange}   actionType='purpose'      data={purpose} checkHeading='Purpose'/>
        
        </div>
        <h5 onClick={()=>setShowMoreFilter(prev=>!prev)}>{showMoreFilter?'Hide Menu':'Show All'}</h5>
    </div>
  )
}

export default FilterSection