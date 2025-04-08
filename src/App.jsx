import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null); // 🆕 ID de la tarea que estamos editando

  const addOrUpdateTask = () => {
    if (title.trim() === '') return;

    if (editingId) {
      // 🛠 Actualizar tarea existente
      setTasks(tasks.map(task =>
        task.id === editingId ? { ...task, title, description } : task
      ));
      setEditingId(null); // Salimos del modo edición
    } else {
      // ➕ Agregar nueva tarea
      setTasks([...tasks, { id: Date.now(), title, description, completed: false }]);
    }

    setTitle('');
    setDescription('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (id === editingId) {
      setEditingId(null); // Si se elimina la tarea que se estaba editando, salir del modo edición
      setTitle('');
      setDescription('');
    }
  };

  const editTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setEditingId(id); // 👈 Entramos en modo edición
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-10 neon-text">Neon Task Manager</h1>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-8 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Título"
          className="w-full md:w-1/3 p-2 rounded border-2 border-cyan-400 bg-black text-white focus:outline-none focus:border-pink-500 transition-all duration-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          className="w-full md:w-1/2 p-2 rounded border-2 border-cyan-400 bg-black text-white focus:outline-none focus:border-pink-500 transition-all duration-300"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={addOrUpdateTask}
          className="p-2 px-4 rounded border-2 border-pink-500 text-pink-500 hover:border-green-400 hover:text-green-400 transition-all duration-300 neon-button"
        >
          {editingId ? 'Guardar Cambios' : 'Agregar Tarea'}
        </button>
        {editingId && (
          <button
            onClick={cancelEdit}
            className="p-2 px-4 rounded border-2 border-yellow-400 text-yellow-400 hover:text-white hover:border-white transition-all duration-300"
          >
            Cancelar
          </button>
        )}
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
        {tasks.length === 0 ? (
          <p className="text-lime-400">No hay tareas aún.</p>
        ) : (
          tasks.map(task => (
            <div
              key={task.id}
              className={`bg-black border-2 border-cyan-400 rounded-xl p-4 shadow-xl transition-all duration-500 relative
              ${task.completed ? 'opacity-60 blur-[1px] scale-95' : 'hover:scale-[1.03]'}`}
            >
              <h2 className={`text-xl font-bold transition-colors duration-300 ${
                  task.completed ? 'line-through text-green-400' : 'text-cyan-300'
                  }`}>
                {task.title}
              </h2>
              <p className={`mt-1 transition-colors duration-300 ${
                  task.completed ? 'line-through text-green-300' : 'text-white'
                  }`}>
                {task.description}
              </p>
              <div className="flex justify-between mt-4 flex-wrap gap-2">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className={`text-sm py-1 px-2 rounded 
                    ${task.completed ? 'bg-green-700 text-white' : 'bg-green-500 text-black'}
                    hover:scale-105 transition-all`}
                >
                  {task.completed ? 'Desmarcar' : 'Completar'}
                </button>
                <button
                  onClick={() => editTask(task.id)}
                  className="text-sm bg-yellow-400 text-black py-1 px-2 rounded hover:scale-105 transition-all"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-sm bg-red-500 text-white py-1 px-2 rounded hover:scale-105 transition-all"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
