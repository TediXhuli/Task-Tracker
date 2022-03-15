import Task from "./Task"

const Tasks = ({ tasksArray, onDelete, onToggle,onMarkAsRead }) => {
    return (
        <>
            {tasksArray.map((taskElement) => (


                <Task key={taskElement.id} 
                    task={taskElement}// id = {integer} text ={string} day = {string} reminder = {boolean} description = {string}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    onMarkAsRead={onMarkAsRead}
                />
            ))}
        </> 
    )
}

export default Tasks