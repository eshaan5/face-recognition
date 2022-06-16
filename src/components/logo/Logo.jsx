import React from 'react'
import Tilt from 'react-parallax-tilt';
import './logo.css'
import scan from './scan.jpg'

const Logo = () => {
  return (
    <div className='logo__container'>
      <Tilt>
      <div className='Tilt br2 shadow-2 grow' style={{ height: '11rem', width: '9rem'}}>
        <h1><img src={scan} alt="" /></h1>
      </div>
    </Tilt>
    </div>
  )
}

export default Logo