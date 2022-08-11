import React from 'react'
import '../css/Title.css'
import GitContributions from './GitContributions'
import {motion} from 'framer-motion'

function Title() {
  return (
    <motion.div
      className='title'
      id='title'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      // exit={{opacity: 0}}
    >
      {/* <div className='title' id='title'> */}
        <h1>
            <span className='name'>
              Danielle Hoey
            </span>
            <span style={{fontSize:'16px'}}>
              (she/her)
            </span>
            <br />
            <span>Software Engineer</span>
        </h1>
        <div className='contributions'>
          <GitContributions />
        </div>

    </motion.div>
    // </div>
  )
}

export default Title