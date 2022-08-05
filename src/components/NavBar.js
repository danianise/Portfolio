import React from 'react'
import '../css/NavBar.css'
import { Avatar } from '@mui/material'
// import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GitContributions from './GitContributions';

function NavBar() {
  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <Avatar
                    alt='Danielle Hoey' 
                    src='dHoey.jpg'
                    sx={{ width: 75, height: 75 }}
                />
                {/* <GitContributions /> */}
            </a>
            <div className='hamburger'>
                {/* <SettingsEthernetIcon /> */}
                <MoreHorizIcon />
            </div>
            <ul className='nav-menu'>
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
                <li>
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