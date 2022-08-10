import React from 'react'
import '../css/ContactExpanded.css'

function ContactExpanded() {
  return (
    <div className='contactExpanded'>
        <h2 className='contactExpandedName'>
            Danielle Hoey
        </h2>
        <p className='contactExpandedTitle'>
            Full Stack Software Engineer
        </p>
        <p className='contactExpandedInfoLg'>
            (413) 822-2738 ∙ <a href='mailto: danianisehoey@gmail.com?subject=I saw your portfolio!'>danianisehoey@gmail.com</a> ∙ Lunenburg, MA ∙ <a href='https://www.linkedin.com/in/danielleahoey/'>LinkedIn</a> ∙ <a href='https://github.com/danianise'>GitHub</a>
        </p>
        <p className='contactExpandedInfoSm'>
            (413) 822-2738<br />
            <a href='mailto: danianisehoey@gmail.com?subject=I saw your portfolio!'>
              danianisehoey@gmail.com
            </a><br />
            Lunenburg, MA<br />
            <a href='https://www.linkedin.com/in/danielleahoey/'>
              LinkedIn
            </a><br />
            <a href='https://github.com/danianise'>
              GitHub
            </a>
        </p>
    </div>
  )
}

export default ContactExpanded