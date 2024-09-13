





const App = () => {

  const course = 'Half Stack application development'
  
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises:10
    },

    {
      name:'Using props to pass data',
      exercises:7
    },

    {
      name:'State of a component',
      exercises: 14
    }
  ]





  //Defining Header component

  const Header = (props) => {
    console.log(props)
    return(
      <>
      <h1 >{props.course}</h1>
      </>
    )

   

  }


  //Defining Content component
  const Content = (props) => {

    console.log(props)

    return(
      <>
      {/* for first object in the array */}
      <p>{props.parts[0].name}</p>
      <p>{props.parts[0].exercises}</p>

      {/* for second object in the parts array */}
      <p>{props.parts[1].name}</p>
      <p>{props.parts[1].exercises}</p>

      {/* for theird object in the parts array, i.e part 3 */}
      <p>{props.parts[2].name}</p>
      <p>{props.parts[2].exercises}</p>
      </>
    )
  

  }

  const Total = (props) => {
    return(
      <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>

      </>
    )

  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts}/>
      
      
    </div>
  )
}

export default App