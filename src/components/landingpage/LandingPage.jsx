import React from 'react'
import './LandingPage.css'
import ContactForm from '../forms/contactform/ContactForm'

 export const LandingPage = () => {
  return (
    <div className='parentContainer'>
 <div className='top'>
        <h1>CONTACT US</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus eos maxime quod nam facilis, minus quaerat repellat, voluptatibus, laboriosam a sit? Culpa vitae aliquam, quibusdam voluptatum nobis veniam incidunt officia.</p>

   </div>
   <div className='pageContent'>
         <div className='left'>
            <ContactForm/> 
         </div>
         <div className='right'>
           <img src='landingimage.jpg'/>
         </div>
   </div>

    </div>
  )
}

//export default LandingPage