import React, { useState } from 'react'
import './Feature.css'

export default function Feature() {
     const [show1 , setShow] = useState([])
     let div = document.querySelector('.scroll-to-up')

     window.onscroll = function(){
          this.scrollY >= 800 ? setShow(true)
          : setShow(false)
      }

      function Up (){
          window.scrollTo({
               top:0,
               behavior:"smooth"
          })
      }

  return (

       <div className='scroll-to-up'>
          {
               show1 &&
               <i class="fa-solid fa-circle-arrow-up  show" onClick={Up}></i>
          }
     </div>
  )
}
