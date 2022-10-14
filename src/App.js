import React from 'react'

const Blan = (props) =>{
    return(
        <form>
          <p> My Names{props.name}, where do you {props.live}</p>   
        </form>
    )
}

const App = () => {
    const today = new Date()
    const x = 25
    const y = 37
    const name = 'bab'
    const live= 10
  return (
    <div>
      <p> hello {today.toString}</p>
      {y - x}
      <Blan name='bib' />
      <Blan name='lbob' />
      < Blan  name= 'beib' live={10 + 29}/>
      <Blan name={name} live={live}/>

    </div>
  )
}



export default App
