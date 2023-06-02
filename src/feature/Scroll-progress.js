import React, { useState } from 'react'
import './Scroll-progress.css'

export default function ScrollProgress() {
     const [progress , setProgress] = useState([])
     let height =document.documentElement.scrollHeight -  document.documentElement.clientHeight
     window.addEventListener("scroll" , () =>{
          let scrollTop = document.documentElement.scrollTop
          setProgress(`${(scrollTop / height) * 100}%`)
     })
     console.log(progress);

  return (
    <div className='scroll-progress' style={{width : `${progress}` }}>
    </div>
  )
}
