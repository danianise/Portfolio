import React from 'react'
import '../css/GitContributions.css'

function GitContributions() {
  return (
    <div className='gitContributions'>
        <div className='gitContainer'>
            <img 
                className='contributionsImage'
                // src="https://ghchart.rshah.org/d4af37/danianise"
                src="https://ghchart.rshah.org/4c4cc9/danianise"
                alt="danianise's GitHub Contributions"
            />
            <h6 className='contributionsTag'>
                danianise's GitHub contributions
            </h6>
        </div>
    </div>
  )
}

export default GitContributions