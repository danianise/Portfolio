import React, {useState} from 'react'
import '../css/NavBar.css'
import { Avatar } from '@mui/material'
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuIcon from '@mui/icons-material/Menu';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className='header'>
        <nav className='navbar'>

        <div className='hamburger' onClick={handleClick}>
                {click ? <CloseIcon /> : <MenuIcon />} 
        </div>

            <a href='/' className='logo'>
                <Avatar
                    alt='Danielle Hoey' 
                    src='dHoey.jpg'
                    sx={{ marginTop:'15px', width: 90, height: 90 }}
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
        </nav>
    </div>
  )
}

export default NavBar