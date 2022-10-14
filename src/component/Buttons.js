import PropTypes from 'prop-types'
const Buttons = ({color, text, onClick}) => {
  return ( 
     <Buttons 
     onClick={onClick} 
     style={{backgroundColor:color}}
      className='btn'
       >
        {text}
    </Buttons>
    )
};
Buttons.defaultProps = {
    color: 'purple'
  }

  Buttons.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
    ,
  }
export default Buttons

