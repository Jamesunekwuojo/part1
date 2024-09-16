import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  // states
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)) // A zero filled array  with desired lenghth(i.e the lenght of the anecdotes array) is created to keep the initial state  values of the votes

  // This function handles the votes for each of the anecdotes
  const handleVote =() => {
    const newVotes = [...votes] // using rest operator to get all the values in the votes array initially created above
    newVotes[selected] += 1 // incrementing the value of the selected index (i.e anecdotes item) in the anecdotes array

    setVotes(newVotes)
  }


  // This functions handles switching to random anecdote
  const handleNext = () => {
    const nextIndex = Math.floor(Math.random() * anecdotes.length) // to handles switching to a random anecdote 
    setSelected(nextIndex)
  
  }

  // To find the anecdote in the anecdote array with the highest number of votes

  const highestVoteIndex = votes.indexOf(Math.max(...votes))




  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p> has {votes[selected]} votes</p>
     
      <div>
        
        <button onClick={handleVote}>add vote</button>
        <button onClick={handleNext}>next</button>
      </div>

      <h1>Anecdote with the highest vote</h1>
      <p>{anecdotes[highestVoteIndex]}</p>
      <p>has {votes[highestVoteIndex]} votes</p>



      
    </div>
  )
}

export default App