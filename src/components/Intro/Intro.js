import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll'
import pr from '../../assets/Full-Stack-Developer-Intern-at-Cactus.jpg'
import resume from '../../assets/resume.png'
import mycv from '../../assets/sufmerncv.pdf'
import wen from '../../assets/wen.webp'
import img from '../../assets/image.png'

function Intro() {


  return (
    <>
      <section id='intro'>
        <div className=' introContent' >
          <span className='hello'>Hello</span>
          <span className='introText'> I'm  <span className='introname'>Ahammad Sufail A K</span><br />Web Developer  </span>
          <p className='intropara'>Fullstack Web Developer (MEARN)</p>
          <a href={mycv} download={mycv} target='_blank'> <button className="btn"><img src={resume} alt="" className='btnImg' />Resume</button></a>
         <div className='linkdiv'> <a href="https://www.linkedin.com/in/ahammad-sufail-a-k"  style={{textDecoration:"none"}}><i class="fa-brands fa-linkedin mt-1 me-2 icondiv " style={{fontSize:"25px"}}></i>
</a><a href="https://github.com/Sufailahmed" ><i class="fa-brands fa-github mt-1 icondiv" style={{fontSize:"25px"}}></i></a></div>
        </div>
        <img src={pr} alt="Profile" className='bg' />


      </section>

    </>

  )
}

export default Intro