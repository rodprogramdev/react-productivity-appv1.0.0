import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Task = ({task}) => {
  return (
    <div className="task">
        <h3>{task.taskText} <FaTimes style={{color:'red', cursor:'pointer'}}/></h3>
        <h3>{task.day}</h3>
    </div>
  )
}

export default Task