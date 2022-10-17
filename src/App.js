import React from 'react'
import Content from './component/Content'
import Header from './component/Header'
import Total from './component/Total'


const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
    
  
const sum= parts[0].exercises + parts[1].exercises + parts[2].exercises
    
    
    return (
        
    <div>
     <Header coursen={course}/>
   <Content parts= {parts} />
    <Total total = {sum}/>


    </div>
  )
}

export default App
