import {FaTimes} from 'react-icons/fa'
const Task = ({task3, onDelete}) => {
  return (
    <div className="task">
      <h4>
        {task3.text} 
        <FaTimes style={{color:'red', cursor: 'pointer'}}
        onClick={() => onDelete(task3.id)}
        />
      </h4>
      <p>{task3.day}</p>
    </div>
  )
}

export default Task
