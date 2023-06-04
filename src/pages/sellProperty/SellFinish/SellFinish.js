import React from 'react';
import axios from 'axios';
import './SellFinish.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {imageFinish} from '../../../../public/assets/imageFinish.png'
export default function SellFinish({objPost , data,errorToast,successToast}) {
 const navigate=useNavigate();
  const submit = () =>{
    axios.post(`https://propertylist.onrender.com/usersProperties`,objPost).then(res => {
      successToast('Your House has been Published');
      setTimeout(()=>{
        navigate('/usersProperties')
      },1000)
      
    })
    .catch(err =>errorToast('Sorry Something went Wrong'))
  }
  return (

      <div className='sell-Finish'>

          <div className='sell-text-Finish'>
              <h1>Finish up and publish</h1>
               <p>In this step, Finally, you will submit the inputs, click on Publish Now to confirm your information</p>
               <input type='Submit' value='Publish Now' onClick={submit}></input>
           </div>

           <div className='sell-img-Finish'>
           {/* https://i.pinimg.com/564x/33/e5/59/33e559a135159f8c5fdd6232df34f342.jpg */}
           <img src= 'https://s3-prod.adage.com/s3fs-public/styles/width_660/public/20221114_AirBnB_Setup_3x2.jpg' alt='img-Finish'></img>

             {/* <img src= {imageFinish} alt='img-Finish'></img> */}
             
           </div>
      
      </div>

  )
}
