import React, {useEffect} from 'react'
import '../css/Skills.css'
import {FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs, FaGithub} from 'react-icons/fa'
import {SiJavascript, SiMongodb, SiPostgresql, SiExpress, SiDjango, SiJson, SiHeroku, 
  SiNetlify, SiPostman, SiGoogleanalytics, SiRailway, SiSwift} from 'react-icons/si'
import {motion} from 'framer-motion'
import ReactGA from 'react-ga';

function Skills() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])


  return (<>
    {/* <div className='skills'> */}
    <motion.div
      className='skills'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      // exit={{opacity: 0}}
    >
        <div className='skillsP'>
          <p>skills</p>
        </div>

        <div className='skillsContent'>
          
          <div className='firstFour'>
            <div className='skillUnit'>
              <FaHtml5 className='skillsIcon'/><br />HTML
            </div>
            
            
            <div className='skillUnit'>
              <FaCss3Alt className='skillsIcon'/><br />CSS
            </div>

            <div className='skillUnit'>
              <SiJavascript className='skillsIcon'/><br />JavaScript
            </div>

            <div className='skillUnit'>
              <FaPython className='skillsIcon'/><br />Python
            </div>
          </div>

          <div className='secondFour'>
            <div className='skillUnit'>
              <SiMongodb className='skillsIcon'/><br />MongoDB/Mongoose
            </div>

            <div className='skillUnit'>
              <SiPostgresql className='skillsIcon'/><br />PostgreSQL
            </div>

            <div className='skillUnit'>
              <FaReact className='skillsIcon'/><br />React
            </div>

            <div className='skillUnit'>
              <FaNodeJs className='skillsIcon'/><br />Node.js
            </div>
          </div>

          <div className='thirdFour'>
            <div className='skillUnit'>
              <SiExpress className='skillsIcon'/><br />Express
            </div>

            <div className='skillUnit'>
              <SiDjango className='skillsIcon'/><br />Django
            </div>

            <div className='skillUnit'>
              <SiJson className='skillsIcon'/><br />JSON
            </div>

            <div className='skillUnit'>
              <SiPostman className='skillsIcon'/><br />Postman
            </div>
          </div>

        </div>
    </motion.div>
    {/* </div> */}
  </>)
}

export default Skills