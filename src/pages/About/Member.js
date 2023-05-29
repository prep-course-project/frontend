import React from 'react'

export default function Member() {
  return (
    <>
     <h1 className='about-mem-h1'>
      Our Team Members</h1> 
      <div className='about-team-container'>
         <div className='about-team-box'> 
         <img src ='https://as2.ftcdn.net/v2/jpg/05/45/89/41/1000_F_545894172_fLINXPGJs19SgFvA3P6vTvXN59iScZJ0.jpg' alt='team image1'/>
          {/* <h3 id='name1' onClick={(e)=>{console.log(e.target)}}>namee1</h3> */}
           {/* <h3>namee</h3> */}
            {/* <h3 className='team-name1'>Name 1</h3> */} 
           </div>
            <div className='about-team-box'>
             <img src ='https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg' alt='team image1'/> 
             {/* <h3>name2</h3>  */}
             </div> 
             <div className='about-team-box'> 
             <img src ='https://media.istockphoto.com/id/1207856403/photo/portrait-of-happy-african-american-young-businessman-in-formal-suit.jpg?s=612x612&w=0&k=20&c=5KcNoy0GCEXQiNgRYL0FcsWi81-OrXn8D0btadopIEk=' alt='team image1'/> 
             {/* <h3>name33</h3>  */}
             </div> 
             <div className='about-team-box'>
               <img src ='https://careercenter.alquds.edu/wp-content/uploads/2020/05/team-1.jpg' alt='team imag1e'/> 
               {/* <h3>namee4</h3> */}
                </div> 
                <div className='about-team-box'> 
                <img src ='https://st3.depositphotos.com/1662991/33647/i/600/depositphotos_336475472-stock-photo-portrait-happy-good-looking-female.jpg' alt='team image1'/>
                 {/* <h3>name5</h3> */}
                  </div> 
                  </div>
    </>
  )
}
