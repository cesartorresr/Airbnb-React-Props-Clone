import React from 'react'
import logo1 from '../Images/grupo.png'

export const Main = () => {
  return (
    <section className='section'>
      <img className='fotogrid' src={logo1} alt='main'/>
      <div className='texto'>
        <h1 className='title'>Online Experiences</h1>
        <p className='parrafo'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
   
  )
}
