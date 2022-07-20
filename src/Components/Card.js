import React from 'react'

export const Card = (props) => {
  return (
    <div>
      <img className='images' src={props.img} alt='logo2'/>
      <div className='descripcion-airbnb'>
        <img className='star' src={props.star} alt='star'/>
        <span>{props.calificacion}</span>
        <span className='grey'>(6) •</span>
        <span className='grey'>{props.pais}</span>
      </div>
      <p>{props.descripcion}</p>
      <p> <span className='bold'>{props.precio}</span>/ person</p>
    </div>
  )
}
