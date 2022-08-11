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
                <img
                    alt='Danielle Hoey' 
                    src='whitelogo.png'
                    className='avatar'
                />
            {/* </a> */}
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                
                <li className='nav-item'>
                    <Link to='title' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                        home
                    </Link>
                </li>
                
                <li className='nav-item'>
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                        about
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='projects' spy={true} smooth={true} offset={-120} duration={500} onClick={closeMenu}>
                        projects
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='skills' spy={true} smooth={true} offset={-120} duration={500} onClick={closeMenu}>
                        skills
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                        contact
                    </Link>
                </li>

                <li className='nav-item'>
                    <a href='resume.pdf' onClick={closeMenu} target='_blank'>
                        <button className='resumeButton'>
                            resume
                        </button>
                    </a>
                </li>

            </ul>
            <div className='hamburger' onClick={handleClick}>
                    {click ? <CloseIcon sx={{color: '#014f86'}}/> : <MenuIcon sx={{color: '#014f86'}}/>} 
            </div>
        </nav>
    </div>
  )
}

export default NavBar