import React from 'react'
import InputHome from './InputHome'

const HomeScreen = () => {
  return (
    <div className='welcome-container'>
       <div className='title-container'>
          <h2 className='title-welcome'>Hi Coach!</h2>
          <p>In order to start, give me your name</p>
       </div>
        <InputHome/>
    </div>
  )
}

export default HomeScreen