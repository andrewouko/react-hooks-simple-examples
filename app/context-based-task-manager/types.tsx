/**
 * Types
 */

import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export interface Action {
  type: TaskReducerActionTypes;
  payload: Task;
}

export interface TaskProps {
  task: Task;
}

export type TaskReducerActionTypes = "add" | "edit" | "delete";
