import React from 'react'
import './Project.css'
import mediaplayer from '../../assets/mediaplayersc.png'
import ekart from '../../assets/ekarsc.png'
import rest from '../../assets/restaurentsc.png'
import counter from '../../assets/countersc.png'

function Projects() {
  return (
  <>
  <section id='works'>
         <h2 className="workstitle">My Projects</h2>

<div className='worksImgs'>
 <a href='https://e-kart-six.vercel.app/cart' className='linksimg'> <img src={ekart} alt="" className='worksImg' />  </a> 
 <a href="https://restaurent-redux-thunk.vercel.app/" className='linksimg'> <img src={rest} alt="" className='worksImg' /></a>
  <a href="https://counter-redux-theta.vercel.app/" className='linksimg'><img src={counter} alt="" className='worksImg' /></a>
  <a href="https://mediaplayer-frontend-plum.vercel.app/" className='linksimg'><img src={mediaplayer} alt="" className='worksImg' /></a>


</div>

<a href="https://github.com/Sufailahmed"><button className='worksBtn'>See More</button></a>
  </section>
  
  </>
  )
}

export default Projects