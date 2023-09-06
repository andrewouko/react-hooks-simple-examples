import { TasksDispatchContext, TasksContext } from "@/app/context-based-task-manager/context";
import { useState, useContext } from "react";

export default function AddTask() {
    const [text, setText] = useState<string>("");
    const dispatch = useContext(TasksDispatchContext);
    const tasks = useContext(TasksContext);
    return (
      <>
        <label
          htmlFor="add_task"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full text-center"
        >
          Task
        </label>
        <input
          name="add_task"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mb-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          onClick={() => {
            setText("");
            dispatch({
              type: "add",
              payload: {
                id: tasks.length - 1 + 1,
                text: text,
                done: false,
              },
            });
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </>
    );
  }