import TaskList from "./TaskList";
import { useState } from "react";

const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listTask, setListTask] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setListTask((previousTasks) => [...previousTasks, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    setListTask((task) => task.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Task list</h1>
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task"
        />
        <button onClick={handleAddTask}>Add task</button>
      </div>
      <TaskList listTask={listTask} deleteTask={handleDeleteTask} />
    </div>
  );
};

export default TodoApp;
