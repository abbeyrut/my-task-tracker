const Part = ({text, count})=> {
    
    return(
    <p>
        {text}  {count}
    </p>
    )
 }



const Content = ({parts}) => {
    
  return (
    <div>
    <Part text= {parts[0].name} count={parts[0].exercises} />
   <Part text= {parts[1].name} count={parts[1].exercises} />
   <Part text= {parts[2].name} count={parts[2].exercises} />
    </div>
  )
 }

export default Content
