import Task from "./Task";
type Props = {
  listTask: string[];
  deleteTask: (index: number) => void;
};

const TaskList = ({ listTask, deleteTask }: Props) => {
  return (
    <div className="taskList">
      {listTask.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)}
          ></Task>
        );
      })}
    </div>
  );
};

export default TaskList;
