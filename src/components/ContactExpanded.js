import React, {useEffect} from 'react'
import '../css/ContactExpanded.css'
import {SiBuymeacoffee} from 'react-icons/si'
import {AiOutlineMail, AiFillLinkedin} from 'react-icons/ai'
import {FiPhone} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'
import {BsGithub, BsCalendarWeek} from 'react-icons/bs'
import {motion} from 'framer-motion'
import ReactGA from 'react-ga'


function ContactExpanded() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
      
      // <div id='contact'>
      <motion.div
        id='contactExpanded'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        // exit={{opacity: 0}}
      >
        <div className='contactExpandedContent'>
          <div className='contactExpandedHead'>
            <h1>
              Contact Me
            </h1>
            <h5>
              ...I would love to hear from you!
            </h5>
          </div>

        <div className='contactExpanded'>

          <li>
                <GoLocation className='contactExpandedIcon'/><br />Lunenburg, MA
          </li>

          <li>
              <FiPhone className='contactExpandedIcon'/><br />(413)822-2738
          </li>

          <li>
            <a href='mailto: danianisehoey@gmail.com?subject=I saw your portfolio!'>
              <AiOutlineMail className='contactExpandedIcon'/><br />danianisehoey@gmail.com
            </a>
          </li>

          <li>
            
            <a href='https://calendly.com/danielleahoey/30min' target='_blank'>
              <BsCalendarWeek className='contactExpandedIcon' /><br />Calendly
            </a>
          </li>

          <li>
            <a href='https://www.linkedin.com/in/danielleahoey/' target='_blank'>
              <AiFillLinkedin className='contactExpandedIcon'/><br />LinkedIn
            </a>
          </li>

          <li>
            <a href='https://github.com/danianise' target='_blank'>
              <BsGithub className='contactExpandedIcon'/><br />GitHub
            </a>
          </li>

          <li>
            <a href='https://www.buymeacoffee.com/danianise' target='_blank'>
              <SiBuymeacoffee className='contactExpandedIcon'/><br />Buy me a coffee
            </a>
          </li>

        </div>
      </div>
  </motion.div>
  )
}

export default ContactExpanded