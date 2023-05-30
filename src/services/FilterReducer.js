export default  function filterReducer(state,action){
    console.log(action.type,"in reducer")
      switch(action.type){
          case 'filterCity':{
            return {...state,city:action.payload}
          }
          case 'filterPropertyType':{
            return {...state,propertyType:action.payload}       
          }
          case 'minRooms':{
            return {...state,minRooms:action.payload}         
          }
          case 'maxRooms':{
            return {...state,maxRooms:action.payload}         
          }
          case 'priceMin':{
            return {...state,priceMin:action.payload}          
          }
          case 'priceMax':{
            return {...state,priceMax:action.payload}          
          }
        case 'filterAgency':{
          return {...state,agency:action.payload}       
        }
          default :return{...state}
        }
      
    }