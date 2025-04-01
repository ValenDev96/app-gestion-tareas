const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="task-stats p-4 border-t border-neon-green mt-4 text-center bg-gray-900 rounded-lg shadow-neon-green">
      <p className="text-xl text-neon-green">Tareas Pendientes: {pendingTasks}</p>
      <p className="text-xl text-neon-green">Total de Tareas: {totalTasks}</p>
    </div>
  );
};

export default TaskStats;