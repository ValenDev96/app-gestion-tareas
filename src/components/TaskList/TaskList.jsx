export default function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-[#888] mt-4">No hay tareas aún.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-[#1a1a1a] p-5 rounded-xl border-2 border-[#39ff14] shadow-lg transition-transform duration-300 hover:rotate-[-1deg] hover:scale-[1.02]"
          style={{
            boxShadow:
              "0px 2px 10px rgba(57, 255, 20, 0.4), 0px 0px 20px rgba(0, 247, 255, 0.2)",
          }}
        >
          <h3 className="text-lg font-bold text-[#39ff14] mb-2">
            {task.title}
          </h3>
          <p className="text-sm text-[#ccc] mb-4">{task.description}</p>
          <div className="flex justify-between gap-2">
            <button
              onClick={() => onEdit(task.id)}
              className="text-xs border border-[#ff00ff] text-[#ff00ff] px-3 py-1 rounded hover:text-[#39ff14] hover:border-[#39ff14] transition-all"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-xs border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition-all"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}  