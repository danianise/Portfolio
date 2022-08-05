import React from 'react'
import Avatar from '@mui/material/Avatar';

function Main() {
  return (
    <div className='main'>
        <h6>
            Welcome, I am
        </h6>

        {/* <Avatar
            alt='Danielle Hoey'
            src='profileimage.png'
            sx={{ width: 200, height: 200 }} 
        /> */}
        {/* <img
            src='profileimage.png'
            alt='Danielle Hoey'
            className='profileImage' 
        /> */}

        <h1>
            Danielle Hoey
        </h1>
        <h1>
            Software Engineer
        </h1>

    </div>
  )
}

export default Main