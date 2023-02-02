import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import batman from "../../public/batman.gif";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-slate-800 p-10 mb-4  rounded-md"
        onSubmit={handleSubmit}
        action=""
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-3">
            Crear nueva tarea
          </h1>
          <img src={batman} alt="" className="w-20 md:w-24" />
        </div>

        <input
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Ej. Practicar React.js..."
          value={title}
          autoFocus
        />

        <textarea
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Ej. Practicar por 4 horas react"
          value={description}
        ></textarea>

        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-300 rounded-md ease-in transition-all">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
