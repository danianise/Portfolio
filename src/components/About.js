import React from 'react'
import '../css/About.css'
import {motion} from 'framer-motion'

function About() {
  return (
    // <div className='about' id='about'>
    <motion.div
      className='about'
      id='about'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      // exit={{opacity: 0}}
    >
        <img className='dHoeyImg' src='dHoey.jpg'/>

        <div className='aboutContent'>
          {/* <h4>About Me</h4> */}
          <p>
              I am a full-stack software engineer with a particular interest in front-end development. I enjoy creating an interface that is not only funtional and user friendly, but also appealing to the eye.
          </p>
          <p>
              I have a Bachelor of Business Administration from the Isenberg School of Management at the University of Massachusetts, Amherst, 15 years experience in retail customer service, and I have recently completed the Software Engineering Immersive course with General Assembly.
          </p>
        </div>
    {/* </div> */}
    </motion.div>
  )
}

export default About