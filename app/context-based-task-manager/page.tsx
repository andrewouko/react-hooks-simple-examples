import AddTask from "../components/task-manager/AddTask";
import TaskList from "../components/task-manager/TaskList";
import Providers from "./context";

/**
 *
 * Components
 */

export default function TaskManager() {
  return (
    <Providers>
      <div className="container mx-auto p-24 pb-0">
        <AddTask />
      </div>
      <div className="container mx-auto p-24 pt-0">
        <TaskList />
      </div>
    </Providers>
  );
}