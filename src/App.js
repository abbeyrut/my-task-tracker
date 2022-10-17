import React from 'react'
import Content from './component/Content'
import Header from './component/Header'
import Total from './component/Total'


const App = () => {
    const course = "Half Stack application development"
    const part1= 'Fundamentals of React'
    const exercises1= 10
    const part2= 'Using props to pass data'
    const exercises2= 7
    const part3='State of a component'
    const exercises3=14
    const sum= exercises1 + exercises2 + exercises3
    
    
    return (
        
    <div>
     <Header coursen={course}/>
    <Content part = {part1} exercises={exercises1} />
    <Content part = {part2} exercises={exercises2} />
    <Content part = {part3} exercises={exercises3} />
    <Total total = {sum}/>


    </div>
  )
}

export default App
