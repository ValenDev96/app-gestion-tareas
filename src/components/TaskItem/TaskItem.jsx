const TaskItem = ({ task, editTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <li className={`task-item p-4 border border-neon-green rounded-lg flex flex-col transition-transform duration-300 hover:scale-105 ${task.completed ? 'bg-green-900 shadow-neon-green' : 'bg-gray-900 shadow-neon-blue'}`}>
      <div className="flex items-center gap-3 mb-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="w-5 h-5 accent-neon-blue"
        />
        <div>
          <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-400' : 'text-neon-green'}`}>{task.title}</h3>
          <p className={`text-sm ${task.completed ? 'text-gray-500' : 'text-neon-green'}`}>{task.description}</p>
        </div>
      </div>
      <div className="flex gap-3 self-end">
        <button onClick={() => editTask(task)} className="text-neon-blue hover:text-neon-pink transition">Editar</button>
        <button onClick={() => deleteTask(task.id)} className="text-red-400 hover:text-red-500 transition">Eliminar</button>
      </div>
    </li>
  );
};

export default TaskItem;
