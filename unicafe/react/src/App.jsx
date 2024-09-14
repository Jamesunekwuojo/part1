import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

// Button component
const Button = ({buttonText}) => {
  return(
    <>
    <button>{buttonText}</button>
    </>
  )

}

// Main application
const App  = () => {

  // setting state for each click
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // functions for handling and keeping feedbacks states nd clicks

  const handleGoodclick = () => {
    setGood(good + 1)
  }

  const handleNeutralclick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadclick = () => {
    setBad(bad + 1)
  }




  return (
    <div>

      <h1> give feedback</h1>
      <Button buttonText="good"></Button>
      <Button buttonText="neutral"></Button>
      <Button buttonText="bad"></Button>

      <h1>Statistis</h1>
      

    </div>
  )


}

export default App;