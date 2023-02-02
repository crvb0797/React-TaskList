import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext(); /* Nombre del contexto */
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (taskTitle, taskDescription) => {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: taskDescription,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
