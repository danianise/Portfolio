import React from 'react'
import '../css/GitContributions.css'

function GitContributions() {
  return (
    <div className='gitContributions'>
        <div className='gitContainer'>
            <img 
                className='contributionsImage'
                src="https://ghchart.rshah.org/d4af37/danianise"
                alt="danianise's GitHub Contributions"
            />
            <h6>
                danianise's GitHub contributions
            </h6>
        </div>
    </div>
  )
}

export default GitContributions