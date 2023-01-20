import React, {useState} from 'react'
import '../css/NavBar.css'
import {Link} from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
        <nav className='navbar'>

            {/* <a href='/'> */}
                {/* <img
                    alt='Danielle Hoey' 
                    src='whitelogo.png'
                    className='avatar'
                /> */}
            {/* </a> */}
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                
                <li className='nav-item'>
                    {/* <Link to='title' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}> */}
                    <a href='/' onClick={closeMenu}>
                        home
                    </a>
                    {/* </Link> */}
                </li>
                
                <li className='nav-item'>
                    {/* <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}> */}
                    <a href='/about' onClick={closeMenu}>
                        about
                    </a>
                    {/* </Link> */}
                </li>

                <li className='nav-item'>
                    {/* <Link to='projects' spy={true} smooth={true} offset={-120} duration={500} onClick={closeMenu}> */}
                    <a href='/projects' onClick={closeMenu}>
                        projects
                    </a>
                    {/* </Link> */}
                </li>

                <li className='nav-item'>
                    {/* <Link to='skills' spy={true} smooth={true} offset={-120} duration={500} onClick={closeMenu}> */}
                    <a href='/skills' onClick={closeMenu}>
                        skills
                    </a>
                    {/* </Link> */}
                </li>

                <li className='nav-item'>
                    {/* <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}> */}
                    <a href='/contact' onClick={closeMenu}>
                        contact
                    </a>
                    {/* </Link> */}
                </li>

                <li className='nav-item'>
                    <a href='DanielleHoey_resume.pdf' onClick={closeMenu} target='_blank'>
                        <button className='resumeButton'>
                            resume
                        </button>
                    </a>
                </li>

            </ul>
            <div className='hamburger' onClick={handleClick}>
                    {click ? <CloseIcon /> : <MenuIcon />} 
            </div>
        </nav>
    </div>
  )
}

export default NavBar