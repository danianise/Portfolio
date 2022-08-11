import React, {useState} from 'react'
import '../css/NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className='header'>
        <nav className='navbar'>

            <a href='/'>
                <img
                    alt='Danielle Hoey' 
                    src='whitelogo.png'
                    className='avatar'
                />
            </a>
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <a href='/'>
                        about
                    </a>
                </li>
                <li className='nav-item'>
                    <a href=''>
                        projects
                    </a>
                </li>
                <li className='nav-item'>
                    <a href=''>
                        skills
                    </a>
                </li>
                <li className='nav-item'>
                    <a href=''>
                        contact
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='resume.pdf' target='_blank'>
                        <button className='resumeButton'>
                            Resume
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