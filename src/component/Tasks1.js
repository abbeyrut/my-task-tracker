import Task from "./Task"
const Tasks1 = ({ tasks, onDelete, onToggle }) => {
    
  return (
    
    <div>
      {tasks.map((task3) => (
      
      < Task 
      key={task3.id} 
      task3={task3} 
        onDelete={onDelete}
        onToggle={onToggle}
      />
      )
      )}
    </div>
  )
}

export default Tasks1
