
import PropTypes from 'prop-types'
import Buttons from './Buttons'

const Head = ({title}) => {
const onClick =() => {
  console.log('Click')
}
  return (
    <header>
        <h1 className='header' >{title}</h1>
       <Buttons onClick= {onClick} color='green' text='Search' />
       
    </header>
  )
}
 Head.defaultProps = {
  title: 'Task tracker',
  }

  Head.propTypes ={
    title:'PropTypes.string.isRequired',
  }
  // CSS in JS
  //const headingStyle={
  //color: 'yellow', backgroundColor: 'black'}

export default Head
