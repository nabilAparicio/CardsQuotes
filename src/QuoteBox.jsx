import React from 'react'
import Quote from './Quote'
import Button from './Button'

const QuoteBox = (props) => {
  return (
    <div className="Quote_box">
      <Quote text={props.text} color={props.color} />
      <Button color={props.color} handleChange={props.handleChange} />
    </div>
  )
}

export default QuoteBox