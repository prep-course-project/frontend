import React from 'react'
import './SellHero.css'
export default function SellHero() {
  return (
    <div className='sell-main-hero'>
        <div className='sell-title'>
            <h2>It’s easy to get started on Elite Sands</h2>
         </div>
       <div className='sell-content'>
         <div className='sell-p1'>
         
         <div className='sell-text'>
            <h2>Tell us about your place</h2>
            <p> Share some basic info, like where it is and how many guests can stay.</p>
            </div>
            <div className='sell-img'>
           <img src='https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg' alt='image-house'></img>
         </div>
         </div>

         <div className='sell-p1'>
        
         <div className='sell-text'>
         <h2> Make it stand out</h2>

           <p>Add 5 or more photos plus a title and description—we will help you out.</p>
           </div>
           <div className='sell-img'>
        <img src='https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg' alt='image-house'></img>
        </div>
         </div>

         <div className='sell-p1'>
         <div className='sell-text'>
         <h2>Finish up and publish</h2>
        
           <p>Choose if you'd like to start with an experienced guest, set a starting price </p>
           </div>
           <div className='sell-img'>
         <img src='https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg' alt='image-house'></img>
          </div>
         </div>
       
         <button >Get Started</button>

      </div>

    </div>
  )
}
