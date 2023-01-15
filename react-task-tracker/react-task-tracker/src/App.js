import Header from "./components/Header"
import Tasks from "./components/Tasks";
import {useState} from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 2:30PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Meet at School",
      day: "Feb 6th at 1:30PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shipping",
      day: "Feb 5th at 2:30PM",
      reminder: false,
    },
  ])

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  return (
    <div className="container">
    <Header title="Track Tracker"/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App
