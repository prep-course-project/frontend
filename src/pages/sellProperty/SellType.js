// import React from 'react'
// import SellCards from '../../Components/SellCards/SellCards'

// export default function SellType() {
//   return (
//     <div>
//           <SellCards/>
   
//     </div>
//   )
// }
import React from 'react'
import {propertyTypeList} from '../../pages/PropertyList/propertyConstants'
import TypeSellCard from '../../Components/TypeSellCard/TypeSellCard';

export default function SellType() {
 
  return (
    <div>
        {
           propertyTypeList.map(item=>{
            return(
              // item.type
              <TypeSellCard items={item.type}/>
            ) 

           }) 
        }
    </div>
  )
}

