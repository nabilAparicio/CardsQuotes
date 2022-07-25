import React from 'react'

const Button = ({ color, handleChange }) => {
  const ButtonStyles = {
    color: color.color,
  }
  return (
    <button className='button' onClick={handleChange} style={ButtonStyles}>Click me</button>
  )
}

export default Button