import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTitle, updatedDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: updatedTitle, description: updatedDescription }
          : task
      )
    );
    setEditTaskId(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditTask = (id) => {
    setEditTaskId(id);
  };

  return (
    <div className="min-h-screen bg-black text-[#39ff14] flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-[#00f7ff] text-shadow-neon">
        Neon Task Manager
      </h1>
      <TaskForm
        onSubmit={addTask}
        onUpdate={updateTask}
        tasks={tasks}
        editTaskId={editTaskId}
      />
      <TaskList
        tasks={tasks}
        onEdit={startEditTask}
        onDelete={deleteTask}
      />
    </div>
  );
}
