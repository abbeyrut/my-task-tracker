const Part = ({part,exercises})=> {
    
    return(
    <p>
        {part}  {exercises}
    </p>
    )
}






const Content = ({text, count}) => {
    
  return (
    <div>

    <Part part =  {text[0]} exercises={count[0]} />
    <Part part = {text[1]} exercises={count[1]} />
    <Part part = {text[2]} exercises={count[2]} />
      
    </div>
  )
}

export default Content
