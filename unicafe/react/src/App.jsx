import { useState } from 'react'

// Button component
const Button = ({buttonText, onClick}) => {
  return(
    <>
    <button onClick={onClick}>{buttonText}</button>
    </>
  )

}

//StatisticsLine component
const StatisticsLine = ({text, value}) => {

  return(
    <div>
      <p>{text}: {value}</p>
      
    </div>
  )


}

// statistics component
const Statistics = ({good, neutral, bad}) => {

 // To set average and positive value to zero when app is initially rendeered i.e when they good, neutral and bad is 0.
 const all = good + neutral + bad;
 const average = all > 0 ? (good -bad)/all :0
 const positive = all > 0 ? (good/all) * 100 :0;
  
  

  return (
    <div>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <StatisticsLine text="good" value={good}></StatisticsLine>

          <StatisticsLine text="neutral" value={neutral}></StatisticsLine>

          <StatisticsLine text="bad" value={bad}></StatisticsLine>
          
          <StatisticsLine text="all" value={all}></StatisticsLine>

          <StatisticsLine text="average" value={average}></StatisticsLine>

          <StatisticsLine text="positive" value={positive}></StatisticsLine>

        

          
         
        </tbody>
      </table>
      
     
    </div>

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
    console.log('good:',good)
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
      <Button buttonText="good" onClick={handleGoodclick}></Button>
      <Button buttonText="neutral" onClick={handleNeutralclick}></Button>
      <Button buttonText="bad" onClick={handleBadclick}></Button>

      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      

    </div>
  )


}

export default App;