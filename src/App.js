import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Add from "./components/Add";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasksArray, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
      description: "This is todays task",
      price: 300,
      compliance: "u Rrit nafta",
      readCompliance: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: false,
      description: "This is todays task",
      price: 300,
      compliance: "u Rrit nafta",
      readCompliance: false,
    },

    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
      description: "This is todays task",
      price: 300,
      compliance: "u Rrit nafta",
      readCompliance: false,
    },
  ]);
  console.log(tasksArray);
  // Add Task
  const AddTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasksArray, newTask]);
  };

  // deleteTask
  const deleteTask = (id) => {
    setTasks(tasksArray.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasksArray.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Mark As Read

  const onMarkAsRead = (id) => {
    setTasks(
      tasksArray.map((task) =>
        task.id === id ? { ...task, compliance: !task.compliance } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <Add onAdd={AddTask} />}
      {tasksArray.length > 0 ? (
        <Tasks
          tasksArray={tasksArray}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          onMarkAsRead={onMarkAsRead}
        />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
