import React from 'react'
import './imagelink.css'

const ImageLink = () => {
  return (
    <div>
        <p className='f3 red'>
            This Magic Brain will detect faces in your image. Give it a try!!!
        </p>
        <div className='pa4 br3 shadow-5 back'>
            <input className='f4 pa2 w-70 center' type="text" name="url" id="url" />
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect!</button>
        </div>
    </div>
  )
}

export default ImageLink