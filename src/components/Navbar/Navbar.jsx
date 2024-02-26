import { Link } from 'react-scroll';
import './navbar.css'
import { useState } from 'react';
import menu from '../../assets/menu.png'
import cntct from '../../assets/cntct.png'
import pport from '../../assets/port.webp'


function ContainerOutsideExample() {
  const [showMenu ,setShowMenu]=useState(false)
  return (
    <>
      <nav className='navbar'>
        <img src={pport} alt="" className='logo' />
        <div className='desktopMenu'>
          <Link className='desktopMenuList' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={200}   > Home</Link>
          <Link className='desktopMenuList' activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={200} > About</Link>
          <Link className='desktopMenuList' activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={200} > Projects</Link>

        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
        }}>
          <img src={cntct} alt="" className='desktopmenuImg' />
          Contact Me
        </button>
        <img src={menu} alt="" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display:showMenu? 'flex':'none'}}>
  <Link className='mobMenuList' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={200} onClick={()=>setShowMenu(false)}  > Home</Link>
  <Link className='mobMenuList' activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={200} onClick={()=>setShowMenu(false)}> About</Link>
  <Link className='mobMenuList' activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={200} onClick={()=>setShowMenu(false)}> Projects</Link>
  <Link className='mobMenuList' activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={200} onClick={()=>setShowMenu(false)}> Contact</Link>
</div>
      </nav>
    </>
  );
}

export default ContainerOutsideExample;
