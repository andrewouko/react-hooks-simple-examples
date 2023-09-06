import { useContext, useState } from "react";
import Task from "./Task";
import { TasksContext } from "../../context-based-task-manager/context";

export default function TaskList() {
  let tasks = useContext(TasksContext);
  const [showCompleted, setShowCompleted] = useState<boolean>(false);
  const [showNotCompleted, setShowNotCompleted] = useState<boolean>(false);
  if(showCompleted) tasks = tasks.filter(task => task.done === true)
  if(showNotCompleted) tasks = tasks.filter(task => task.done === false)
  return (
    <div className="mt-4">
      <div className="flex flex-row space-x-2 justify-center bg-gray-200">
        <input type="checkbox" checked={showCompleted} onChange={e => setShowCompleted(!showCompleted)} />
        <label>Show Completed</label>
        <input type="checkbox" checked={showNotCompleted} onChange={e => setShowNotCompleted(!showNotCompleted)} />
        <label>Show Not Completed</label>
      </div>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
