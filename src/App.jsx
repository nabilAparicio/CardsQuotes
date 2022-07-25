import React, { useState } from 'react'
import './App.css'
import Quotes from './json/quotes.json'
import Colors from './json/colors.json'
import QuoteBox from './QuoteBox'

function App() {
  const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]
  const [Color, setColor] = useState(randomElement(Colors))
  const [Text, setQuotes] = useState(randomElement(Quotes))

  const AppStyles = {
    backgroundColor: Color.color,
  }

  const handleChange = () => {
    const quote = randomElement(Quotes)
    const color = randomElement(Colors)
    setQuotes(quote)
    setColor(color)
  }
  return (
    <div style={AppStyles} className="App">
      <QuoteBox text={Text} color={Color} handleChange={handleChange} />
    </div>
  )
}

export default App
