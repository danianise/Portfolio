import React, {useState} from 'react'
import '../css/NavBar.css'
import { Avatar } from '@mui/material'
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <Avatar
                    alt='Danielle Hoey' 
                    src='dHoey.jpg'
                    sx={{ width: 90, height: 90 }}
                />
            </a>
            <div className='hamburger' onClick={handleClick}>
                {click ? <CloseIcon /> : <MoreVertIcon />}
                
            </div>
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
                    <button className='resumeButton'>
                        Resume
                    </button>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default NavBar