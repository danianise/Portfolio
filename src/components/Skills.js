import React from 'react'
import '../css/Skills.css'
import GitContributions from './GitContributions'
import {FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs, FaGithub} from 'react-icons/fa'
import {SiJavascript, SiMongodb, SiPostgresql, SiExpress, SiDjango, SiJson, SiHeroku, SiNetlify, SiPostman} from 'react-icons/si'
import {motion} from 'framer-motion'

function Skills() {

  return (<>
    {/* <div className='skills'> */}
    <motion.div
      className='skills'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      // exit={{opacity: 0}}
    >
        <div className='skillsContent'>
          <li>
            <FaHtml5 className='skillsIcon'/><br />HTML
          </li>
          
          <li>
            <FaCss3Alt className='skillsIcon'/><br />CSS
          </li>

          <li>
            <SiJavascript className='skillsIcon'/><br />JavaScript
          </li>

          <li>
            <FaPython className='skillsIcon'/><br />Python
          </li>

          <li>
            <SiMongodb className='skillsIcon'/><br />MongoDB/Mongoose
          </li>

          <li>
            <FaReact className='skillsIcon'/><br />React
          </li>

          <li>
            <FaNodeJs className='skillsIcon'/><br />Node.js
          </li>

          <li>
            <SiExpress className='skillsIcon'/><br />Express
          </li>

          <li>
            <SiDjango className='skillsIcon'/><br />Django
          </li>

          <li>
            <SiJson className='skillsIcon'/><br />JSON
          </li>

          <li>
            <SiHeroku className='skillsIcon'/><br />Heroku
          </li>

          <li>
            <FaGithub className='skillsIcon'/><br />GitHub
          </li>

          <li>
            <SiPostman className='skillsIcon'/><br />Postman
          </li>

          <li>
            <SiNetlify className='skillsIcon'/><br />Netlify
          </li>
        </div>
    </motion.div>
    {/* </div> */}
  </>)
}

export default Skills