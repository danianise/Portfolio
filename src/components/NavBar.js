import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import '../css/NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {

  const [click, setClick] = useState(false)
  const {params} = useParams()

  console.log({params})


  const handleClick = () => {
    setClick(!click)
  }

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
        <nav className='navbar'>
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                
                <li className='nav-item'>
                    <a href='/' className={params} onClick={closeMenu}>
                        home
                    </a>
                </li>
                
                <li className='nav-item'>
                    <a href='/about' className={params} onClick={closeMenu}>
                        about
                    </a>
                </li>

                <li className='nav-item'>
                    {/* <Link to='projects' spy={true} smooth={true} offset={-120} duration={500} onClick={closeMenu}> */}
                    <a href='/projects' className={params} onClick={closeMenu}>
                        projects
                    </a>
                    {/* </Link> */}
                </li>

                <li className='nav-item'>
                    {/* <Link to='skills' spy={true} smooth={true} offset={-120} duration={500} onClick={closeMenu}> */}
                    <a href='/skills' className={params} onClick={closeMenu}>
                        skills
                    </a>
                    {/* </Link> */}
                </li>

                <li className='nav-item'>
                    {/* <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}> */}
                    <a href='/contact' className={params} onClick={closeMenu}>
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