import Task from './Task'
const Tasks = ({taskList}) => {
  return (
    <>
        {taskList.map((task)=>(
          <h3 key={task.idRef}>{task.taskText}</h3>
        ))}
    </>
    
  )
}

export default Tasks