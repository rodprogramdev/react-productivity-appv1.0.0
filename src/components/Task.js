import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Task = ({task,onDeleteTask}) => {
  return (
    <div className="task">
        <h3>{task.taskText} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDeleteTask(task.idRef)}/></h3>
        <h3>{task.day}</h3>
    </div>
  )
}

export default Task