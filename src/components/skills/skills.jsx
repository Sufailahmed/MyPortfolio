import React from 'react'
import './skills.css'
import frontend from '../../assets/frontend-development.png' 
import backend from '../../assets/backend.png'
import database from '../../assets/database.jpeg'
import mongodb from '../../assets/mongodb.png'

function skills() {
  return (
   
   <section id='skills'>
   <span className='skillTitle'>What I Do</span>
   <span className='skillDesc'> A passionate full-stack developer with a knack for building scalable and user-friendly web applications.
My journey into full-stack development began with a curiosity to understand how things work behind the scenes.  I've honed my skills in front-end technologies like React, as well as back-end frameworks like Node.js and Express.
What motivates me as a developer is the opportunity to tackle complex challenges and transform ideas into reality. I'm dedicated to delivering solutions that exceed expectations.
 I'm always eager to connect with fellow developers, designers, and innovators to exchange ideas and explore new opportunities.

Let's connect and build something great together!</span>
<div className='d-flex align-items-center justify-content-center'>
<a href="https://www.linkedin.com/in/ahammad-sufail-a-k"  style={{textDecoration:"none"}}><i class="fa-brands fa-linkedin mt-2 me-2 " style={{fontSize:"25px"}}></i>
</a><a href="https://github.com/Sufailahmed" ><i class="fa-brands fa-github mt-2" style={{fontSize:"25px"}}></i></a>
</div>

   <div className='skillBars'>
<div className="skillBar">
  <img src={frontend} alt="" className='skillBarImg'/>
  <div className='skillBarText'>
    <h2>Front End Design</h2>
    <p><div className="languages">
        <i className="fab fa-html5"></i>
        <span className='ms-2'>HTML5</span>
      
      
        <i className="fab fa-css3-alt ms-2"></i>
        <span className='ms-2'>CSS</span>
      
      
        <i className="fab fa-js ms-2"></i>
        <span className='ms-2'>JavaScript</span>
     
        <i className="fab fa-react ms-2"></i>
        <span className='ms-2'>React</span>
      </div></p>
  </div>
</div>
<div className="skillBar">
  <img src={backend} alt="" className='skillBarImg'/>
  <div className='skillBarText'>
    <h2>Backend Development</h2>
    <p>  <div className="">
        <i className="fab fa-node ms-2"></i>
        <span className='ms-2'>Node.js</span>
    
    
        <i className="fab fa-express ms-2"></i>
        <span className='ms-2'>Express</span>
      </div></p>
  </div>
</div><div className="skillBar">
  <img src={database} alt="" className='skillBarImg'/>
  <div className='skillBarText'>
    <h2>Database Manageemnt</h2>
    <p><img src={mongodb} alt="" style={{objectFit:"cover",height:"15px",width:"10px"}}/> Mongo DB</p>
  </div>
</div>
   </div>

   </section>
     
   
   
   
  )
}

export default skills