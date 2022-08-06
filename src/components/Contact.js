import React from 'react'
import '../css/Contact.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div className='contact'>

        <a href='mailto: danianisehoey@gmail.com?subject=I saw your portfolio!'>
            <MailOutlineIcon className='icon' sx={{fill: '#014f86'}}/>
        </a>
        <br />

        <a href='https://www.linkedin.com/in/danielleahoey/' target='_blank'>
            <LinkedInIcon className='icon' sx={{fill: '#014f86'}}/>
        </a>
        <br />

        <a href='https://github.com/danianise' target='_blank'>
            <GitHubIcon className='icon' sx={{fill: '#014f86'}}/>
        </a>
        <div className='vertLine'>
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br /> */}
        </div>

    </div>
  )
}

export default Contact