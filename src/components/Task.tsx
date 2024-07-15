type Props =  {
    task: string
    deleteTask: (index:number) => void
}

const Task = ({task, deleteTask}: Props) => {

   
 return (
    <div className="task" >
        <span> {task}</span>
        <button onClick={deleteTask} > Delete</button>
    </div>
    
 )
}

export default Task