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
        <div className='contactExpanded'>

          <div className='contactExpandedHead'>
            <h1>
              Contact Me
            </h1>
            <h5>
              ...I would love to hear from you!
            </h5>
          </div>

        <div className='contactExpandedContent'>

          <div className='firstThree'>
            <div className='contactUnit'>
                <FiPhone className='contactExpandedIcon'/><br />(413)822-2738
            </div>

            <div className='contactUnit'>
              <a href='mailto: danianisehoey@gmail.com?subject=I saw your portfolio!'>
                <AiOutlineMail className='contactExpandedIcon'/><br />danianisehoey@gmail.com
              </a>
            </div>

            <div className='contactUnit'>
              <a href='https://calendly.com/danielleahoey/' target='_blank'>
                <BsCalendarWeek className='contactExpandedIcon' /><br />Calendly
              </a>
            </div>
          </div>

          <div className='secondThree'>
            <div className='contactUnit'>
              <a href='https://www.linkedin.com/in/danielleahoey/' target='_blank'>
                <AiFillLinkedin className='contactExpandedIcon'/><br />LinkedIn
              </a>
            </div>

            <div className='contactUnit'>
              <a href='https://github.com/danianise' target='_blank'>
                <BsGithub className='contactExpandedIcon'/><br />GitHub
              </a>
            </div>

            <div className='contactUnit'>
              <a href='https://www.buymeacoffee.com/danianise' target='_blank'>
                <SiBuymeacoffee className='contactExpandedIcon'/><br />Buy me a coffee
              </a>
            </div>
          </div>

        </div>
      </div>
  </motion.div>
  )
}

export default ContactExpanded