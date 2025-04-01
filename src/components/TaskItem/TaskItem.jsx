const TaskItem = ({ task, editTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <li className={`task-item p-4 border border-neon-green rounded-lg flex justify-between items-center transition-transform duration-300 hover:scale-105 ${task.completed ? 'bg-green-900 shadow-neon-green' : 'bg-gray-900 shadow-neon-blue'}`}>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="w-5 h-5 accent-neon-blue"
        />
        <span className={`text-lg font-medium ${task.completed ? 'line-through text-gray-400' : 'text-neon-green'}`}>{task.text}</span>
      </div>
      <div className="flex gap-3">
        <button onClick={() => editTask(task.id)} className="text-neon-blue hover:text-neon-pink transition">Editar</button>
        <button onClick={() => deleteTask(task.id)} className="text-red-400 hover:text-red-500 transition">Eliminar</button>
      </div>
    </li>
  );
};

export default TaskItem;