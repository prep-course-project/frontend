import React from 'react'
import './DescImg.scss'
function DescImg() {
  return (
    <div className='descImg__main'>
      <div className='descImg__upload'>
      <div className='descImg__title'>
      <h1>Add some photo of your house</h1>
     </div>
     <form className='desciImg__form' method='POST' action={`${process.env.REACT_APP_URL}/property/imgUpload`} encType='multipart/form-data' >
         <label class="custom-file-upload">
          <input type="file"/>
          <i class="fa-solid fa-image"></i>
         <p>Click here to choose your house picture</p>
          </label>
            <input type="submit" />
        </form>
    
      </div>
      <div className='descImg__desc'>
        <h1>Add a description to your house</h1>
        <textarea name="description" id="" cols="30" rows="10"></textarea>
      </div>
 
    </div>
  )
}

export default DescImg