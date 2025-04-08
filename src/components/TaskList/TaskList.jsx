export default function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-[#888] mt-4">No hay tareas aún.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-[#141414] p-5 rounded-2xl shadow-lg border border-[#00f7ff] text-white hover:scale-105 transition-all relative"
          style={{
            boxShadow: "0px 0px 20px rgba(0, 247, 255, 0.5)",
            transform: "rotate(-1deg)",
          }}
        >
          <h3 className="text-xl font-bold text-[#39ff14] mb-2">
            {task.title}
          </h3>
          <p className="text-[#ccc] mb-4">{task.description}</p>
          <div className="flex justify-between gap-2">
            <button
              onClick={() => onEdit(task.id)}
              className="text-sm border border-[#ff00ff] text-[#ff00ff] px-3 py-1 rounded hover:text-[#39ff14] hover:border-[#39ff14] transition-all"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-sm border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition-all"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
