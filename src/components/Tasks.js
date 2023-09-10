import Task from './Task'
const Tasks = ({taskList}) => {
  return (
    <>
        {taskList.map((task)=>(
         <Task key={task.idRef} task={task} />
        ))}
    </>
    
  )
}

export default Tasks