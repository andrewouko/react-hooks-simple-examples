import { TasksDispatchContext } from "@/app/context-based-task-manager/context";
import { TaskProps } from "@/app/context-based-task-manager/types";
import { useState, useContext } from "react";

export default function Task({ task }: TaskProps) {
    const [edit, setEdit] = useState<boolean>(false);
    const [text, setText] = useState<string>(task.text);
    const dispatch = useContext(TasksDispatchContext);
    if (edit)
      return (
        <div className="grid grid-cols-2 gap-4 mb-3 items-center">
          <input
            type="text"
            className="mb-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              setEdit(false);
              dispatch({
                type: "edit",
                payload: {
                  ...task,
                  text,
                },
              });
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      );
    return (
      <div className="grid grid-cols-4 gap-2 mb-3 items-center">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "edit",
              payload: { ...task, done: task.done ? false : true },
            });
          }}
        />
        <label htmlFor="add_task">{task.text}</label>
        <button
          onClick={() => setEdit(true)}
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch({ type: "delete", payload: task })}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
        </button>
      </div>
    );
  }