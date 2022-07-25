import React from 'react'

const Quote = ({ text, color }) => {
  const QuoteStyles = {
    color: color.color,
  }
  return (
    <div className='quote_text' style={QuoteStyles}>
      <p className='p_quote'>{text.quote}</p>
      <p className='p_author'>"{text.author}"</p>
    </div>
  )
}

export default Quote