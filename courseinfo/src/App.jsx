
i




const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14




  //Defining Header component

  const Header = (props) => {

    return(
      <>
      <h1 >{props.course}</h1>
      </>
    )

   

  }


  //Defining Content component
  const Content = (props) => {

    const Part1 = (props) => {
      return(
        <>
        <p>{props.part1}</p>
        <p>{props.exercises1}</p>
        </>
      )

    }

    const Part2 = (props) => {
      return(
        <>
        <p>{props.part2}</p>
        <p>{props.exercises2}</p>
        </>
      )

    }

    const Part3 = (props) => {
      return(
        <>
          <p>{props.part3}</p>
          <p>{props.exercises3}</p>
        </>
      )

    }

    return(
      <>
      <Part1 part1={part1} exercises1={exercises1}/>
      <Part2 part2={part2} exercises2={exercises2}/>
      <Part3 part3={part3} exercises3={exercises3}/>
   
      </>
    )
  

  }

  const Total = () => {
    return(
      <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

      </>
    )

  }

  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total/>
      
      
    </div>
  )
}

export default App