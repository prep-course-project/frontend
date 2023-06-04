import React from 'react'
import './Member.css';
import { Link } from 'react-router-dom'

export default function Member() {
  return (
    <>
     <div className='about-mem-h2'>
      <h2>Our Team Members</h2> 
      </div>
      <div className='about-team-container'>
         <div className='about-team-box'> 
         <img src ='https://media.discordapp.net/attachments/1112031625048490026/1114802327463940186/me.jpg' alt='team image1'/>
          <div className='about-mem-try'></div>
           <h3 >Moh.Abdeen</h3>
           <p>software Engineer</p>
           
           <div className='about-font'>
           <Link><i class="fa-brands fa-facebook" ></i></Link>

           </div>
           <div className='about-font2'>
           <Link><i class="fa-brands fa-twitter"></i></Link>

           </div>
           <div className='about-font3'>
           <Link><i class="fa-brands fa-instagram"></i></Link>

           </div>

           </div>
            <div className='about-team-box'>
             <img src ='https://media.discordapp.net/attachments/1112031625048490026/1114801562234138654/my_img.jpg?width=668&height=671' alt='team image1'/> 
             <div className='about-mem-try'></div>

             <h3>Ehab Salhi</h3> 
             <p>software Engineer  </p>


             <div className='about-font'>
             <Link><i class="fa-brands fa-facebook"></i></Link>

           </div>
           <div className='about-font2'>
           <Link><i class="fa-brands fa-twitter"></i></Link>

           </div>
           <div className='about-font3'>
           <Link><i class="fa-brands fa-instagram"></i></Link>

           </div>
             </div> 
             
             <div className='about-team-box'>
             <img src ='https://media.discordapp.net/attachments/1111962571994574919/1114803093339643954/image.png' alt='team imag1e'/> 
             <div className='about-mem-try'></div>

             <h3>Moh.Jadaan</h3> 
             <p>software Engineer</p>

             <div className='about-font'>
             <Link><i class="fa-brands fa-facebook"></i></Link>

           </div>
           <div className='about-font2'>
           <Link><i class="fa-brands fa-twitter"></i></Link>

           </div>
           <div className='about-font3'>
           <Link><i class="fa-brands fa-instagram"></i></Link>

           </div>

             </div> 
             <div className='about-team-box'>
             <img src ='https://media.discordapp.net/attachments/1111962571994574919/1114802680557215817/image.png'/> 
             <div className='about-mem-try'></div>
               <h3>Omar Hamada</h3>
               <p>software Engineer  </p>

               <div className='about-font'>
               <Link><i class="fa-brands fa-facebook"></i></Link>

           </div>
           <div className='about-font2'>
           <Link><i class="fa-brands fa-twitter"></i></Link>

           </div>
           <div className='about-font3'>
           <Link><i class="fa-brands fa-instagram"></i></Link>

           </div>

                </div> 
                <div className='about-team-box'> 
                <img src ='https://media.discordapp.net/attachments/1111962571994574919/1114803687680917524/image.png' alt='team image1'/>
                <div className='about-mem-try'></div>

                 <h3>Farah Yasin</h3>
                 <p>software Engineer  </p>

                 <div className='about-font'>
                  <Link><i class="fa-brands fa-facebook"></i></Link>

           </div>
           <div className='about-font2'>
           <Link><i class="fa-brands fa-twitter"></i></Link>

           </div>
           <div className='about-font3'>
           <Link><i class="fa-brands fa-instagram"></i></Link>

           </div>
                  </div> 
                  </div>
    </>
  )
}
