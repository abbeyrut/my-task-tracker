import {useState} from 'react'
import Tasks1 from "./component/Tasks1"
import Head from "./component/Head"

const App = () => {const [tasks, setTasks] = useState ([
  {
  id: 1,
  text: 'Assigment',
  day: 'Mon 18:00',
  reminder: true,
},
  {
      id: 1,
      text: 'Meeting',
      day: 'Tue 10:00',
      reminder: true,
},
  {
          id: 1,
          text: 'Travel',
          day: 'Wed 13:00',
          reminder: false,
},
])

// Delete Task
const deleteTask = (id) =>{
setTasks(tasks.filter((task3) => task3.id !==id))
}
  //Toggle Reminder
  const toggleReminder =(id) =>{
    setTasks(tasks.map((task3) => task3.id ===id ? {...task3, reminder: !task3.reminder} : task3))
  }
  return (
    <div className='container'>
      <Head />
   { tasks.length > 0 ? <Tasks1
    tasks={tasks} 
    onDelete={deleteTask}
    onToggle={toggleReminder}
    /> :(' No Task Saved')}
    
    
    </div>
  );
}

export default App;
