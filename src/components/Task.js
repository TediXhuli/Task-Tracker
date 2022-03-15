import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle,onMarkAsRead }) => {
    // id = {integer} text ={string} day = {string} reminder = {boolean} description = {string}
    return (
        <>
        <div className={`task ${task.reminder ? 'reminder' :''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}{' '} <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
            <p>{task.description}</p>
            <h3>{task.price}</h3>
            <p className={`  ${task.readCompliance ? 'readCompliance' :''}`}>{task.compliance}</p>
        </div>
        </>
    )
}

export default Task