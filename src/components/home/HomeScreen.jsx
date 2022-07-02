import React from 'react'
import InputHome from './InputHome'

const HomeScreen = () => {
  return (
    <div className='welcome-container'>
       <div className='title-container'>
          <h2 className='title-welcome'>¡Hola Entrenador! </h2>
          <p>Para pode comenzar, dame tu nombre</p>
       </div>
        <InputHome/>
    </div>
  )
}

export default HomeScreen