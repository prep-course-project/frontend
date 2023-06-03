import React,{useState} from 'react'
import './DescImg.scss'
import axios from 'axios';
function DescImg({prevousData}) {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleAddImage(e){
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_URL}usersProperties`,{...prevousData})
    .then(response=>{
      console.log(response)
    })
  }
  return (
    <div className='descImg__main'>
      <h1>Upload a picture of your house</h1>
      <label class="custom-file-upload">
        <div>
        <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
        </div>
        {selectedImage ? (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )
    :<div className='onpreview__image'>
      <i class="fa-solid fa-image"></i>
      <p>Click here to choose your house picture</p>
      </div>
    }
          </label>
    </div>
  )
}

export default DescImg