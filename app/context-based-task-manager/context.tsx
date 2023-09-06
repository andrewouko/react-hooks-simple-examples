import { Dispatch, createContext, useReducer } from "react";
import { Action, ProviderProps, Task } from "./types";

/**
 * Context, Providers and Reducers
 */
const initial_tasks: Task[] = [
  { id: 0, text: "Schedule day", done: true },
  { id: 1, text: "Prepare breakfast", done: false },
  { id: 2, text: "Attend scrum meeting", done: false },
];

export const TasksContext = createContext<Task[]>(initial_tasks);
export const TasksDispatchContext = createContext<Dispatch<Action>>(() => null);

// reducer takes the state and action as arguments
function tasksReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type.toLowerCase()) {
    case "add":
      return [...tasks, action.payload];
    case "edit":
      // find index to edit by id
      const index = tasks.findIndex((task) => task.id === action.payload.id);
      // update object at index with payload
      tasks[index] = {
        ...tasks[index],
        ...action.payload,
      };
      return [...tasks];
    case "delete":
      return tasks.filter((task) => task.id !== action.payload.id);
  }
  return tasks;
}

export default function Providers({ children }: ProviderProps) {
  /**
   * Reducer used here to show to manage complex state logic
   * (instead of useState)
   */
  const [tasks, dispatch] = useReducer(tasksReducer, initial_tasks);
  console.log(tasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
