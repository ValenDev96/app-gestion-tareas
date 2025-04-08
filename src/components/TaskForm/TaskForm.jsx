import { useState, useEffect } from "react";

export default function TaskForm({ onSubmit, onUpdate, tasks, editTaskId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editTaskId !== null) {
      const task = tasks.find((t) => t.id === editTaskId);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
      }
    }
  }, [editTaskId, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTaskId !== null) {
      onUpdate(editTaskId, title, description);
    } else {
      onSubmit(title, description);
    }
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 w-full max-w-md bg-[#111] p-6 rounded-2xl shadow-lg shadow-[#00f7ff]/50 border border-[#00f7ff]"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        className="w-full mb-4 p-3 rounded bg-[#222] border border-[#00f7ff] text-[#00f7ff] focus:border-[#ff00ff] focus:shadow-lg"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
        rows={3}
        className="w-full mb-4 p-3 rounded bg-[#222] border border-[#00f7ff] text-[#00f7ff] focus:outline-none focus:ring-2 focus:ring-[#ff00ff] transition-shadow"
      />

      <button
        type="submit"
        className="w-full bg-[#111] border border-[#ff00ff] text-[#ff00ff] px-4 py-2 rounded shadow-md hover:bg-[#222] hover:text-[#39ff14] hover:border-[#39ff14] transition-all"
      >
        {editTaskId !== null ? "Actualizar Tarea" : "Agregar Tarea"}
      </button>
    </form>
  );
}
