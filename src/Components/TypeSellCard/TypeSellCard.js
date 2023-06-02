
// import React from 'react'
// import {propertyTypeList} from '../../pages/PropertyList/propertyConstants'

// export default function TypeSellCard() {
 
//   return (
//     <div>
//         {
//            propertyTypeList.map(item=>{
//             return item.type

//            }) 
//         }
//     </div>
//   )
// }

import React from 'react'

export default function TypeSellCard({items}) {
  return (
    <div>
      {items}
    </div>
  )
}


