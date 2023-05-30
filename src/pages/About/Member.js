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
         <img src ='https://as2.ftcdn.net/v2/jpg/05/45/89/41/1000_F_545894172_fLINXPGJs19SgFvA3P6vTvXN59iScZJ0.jpg' alt='team image1'/>
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
             <img src ='https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg' alt='team image1'/> 
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
             <img src ='https://careercenter.alquds.edu/wp-content/uploads/2020/05/team-1.jpg' alt='team imag1e'/> 
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
             <img src ='https://media.istockphoto.com/id/1207856403/photo/portrait-of-happy-african-american-young-businessman-in-formal-suit.jpg?s=612x612&w=0&k=20&c=5KcNoy0GCEXQiNgRYL0FcsWi81-OrXn8D0btadopIEk=' alt='team image1'/> 
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
                <img src ='https://st3.depositphotos.com/1662991/33647/i/600/depositphotos_336475472-stock-photo-portrait-happy-good-looking-female.jpg' alt='team image1'/>
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
