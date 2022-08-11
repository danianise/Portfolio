import React from 'react'
import '../css/Title.css'

function Title() {
  return (
    <div className='title' id='title'>
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

    </div>
  )
}

export default Title