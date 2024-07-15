 import TaskList from "./TaskList"
 import { useState } from "react";
 const TodoApp = () => {

    const [newTask, setNewTask] = useState<string>('')
    let task: string
    const [listTask, setListTask] = useState<string[]>([])

    const handleAddTask = () => {
        console.log('en la funcion');
        if(newTask.trim() === '') return
        setListTask( previousTasks => [...previousTasks, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index:number) =>{
      //arreglar  
      console.log('delete');
      setListTask( task => task.filter((_, i) => i !== index ))  
    }

  return (
    <div className="container">
      <h1>Task list</h1>
      <div>
        <input 
        type="text" 
        value={newTask}
        onChange={(e) => {
          //areglar
            task = e.target.value
            setNewTask(task)
            console.log(task);
        } }
        placeholder="New task"
        />
        <button
        onClick={handleAddTask}
        >
            Add task
        </button>
      </div>
      <TaskList listTask = {listTask} deleteTask = {handleDeleteTask} />
    </div>
  );
}

export default TodoApp
