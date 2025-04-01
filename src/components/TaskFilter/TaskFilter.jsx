const TaskFilter = ({ setFilter, currentFilter }) => {
  return (
    <div className="task-filter flex gap-4 justify-center py-4">
      {['all', 'active', 'completed'].map(filter => (
        <button 
          key={filter}
          onClick={() => setFilter(filter)} 
          className={`p-3 rounded-lg text-lg font-semibold transition duration-300 
                      ${currentFilter === filter ? 'bg-neon-blue text-black shadow-neon-blue' : 'bg-gray-800 text-neon-green'} 
                      hover:scale-105 hover:shadow-neon-blue`}
        >
          {filter === 'all' ? 'Todas' : filter === 'active' ? 'Pendientes' : 'Completadas'}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;