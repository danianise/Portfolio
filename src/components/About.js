import React, {useEffect} from 'react'
import '../css/About.css'
import {motion} from 'framer-motion'
import ReactGA from 'react-ga';

function About() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

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
              I am a Software Engineer Located in the Greater Boston area. My extensive customer
              service experience drives me to improve the well-being of others with an empathetic approach to empowerment. 
              As a career-changer I am commited to continuously learning new technologies. I am currently seeking
              the next opportunity to grow my skillset with hands-on experience.
          </p>
          <p>
              I have a Bachelor of Business Administration from the Isenberg School of Management at the
              University of Massachusetts, Amherst, 15 years experience in retail customer service,
              and I have recently completed the Software Engineering Immersive course with General Assembly.
              Currently I'm working freelance as a Web Developer, building e-commerce websites for small businesses.
          </p>
          <p>
              I'm a tattoo enthusiast. I'm a nerd for fantasy and sci-fi.
              I collect hard-cover books. My favorite author is Margaret Atwood.
              I have a weird knack for finding four-leaf clovers and inside the larger books
              on my shelf you'll find at least a hundred of them waiting to be cast in resin.
              I'm a mom to kids and cats, and I hope to spend the rest of my life learning and experiencing.
          </p>
        </div>
    {/* </div> */}
    </motion.div>
  )
}

export default About