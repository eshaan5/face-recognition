import React from 'react'
import Tilt from 'react-parallax-tilt';
import './logo.css'

const Logo = () => {
  return (
    <div className='logo__container'>
      <Tilt>
      <div className='Tilt br2 shadow-2 grow' style={{ height: '150px', width: '150px'}}>
        <h1>👀</h1>
      </div>
    </Tilt>
    </div>
  )
}

export default Logo