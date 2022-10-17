import React from 'react'
import Content from './component/Content'
import Header from './component/Header'
import Total from './component/Total'


const App = () => {
    
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
    
  
const sum= part1.exercises + part2.exercises + part3.exercises
    
    
    return (
        
    <div>
     <Header coursen={course}/>
   <Content text= {part1.name} count={part1.exercises} />
   <Content text= {part2.name} count={part2.exercises} />
   <Content text= {part3.name} count={part3.exercises} />
    <Total total = {sum}/>


    </div>
  )
}

export default App
