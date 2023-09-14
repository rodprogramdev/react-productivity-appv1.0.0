import Task from './Task'
const Tasks = ({taskList, onDeleteTask}) => {
  return (
    <>
        {taskList.map((task)=>(
         <Task key={task.idRef} task={task} onDeleteTask={onDeleteTask} />
        ))}
    </>
    
  )
}

export default Tasks