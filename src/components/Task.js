import React from 'react';
import {FaTimes} from 'react-icons/fa';
import BasicModal from './Modal'
const Task = ({task,onDeleteTask}) => {
  return (
    <div className="task">
        <h3>{task.taskText}</h3>
        <h3>{task.day}</h3>
        <BasicModal task={task} onDeleteTask={onDeleteTask}/>
    </div>
  )
}

export default Task