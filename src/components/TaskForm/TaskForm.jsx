import { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskText(taskToEdit.text);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') {
      setError('La tarea no puede estar vacía.');
      return;
    }
    if (taskToEdit) {
      editTask(taskToEdit.id, taskText);
    } else {
      addTask(taskText);
    }
    setTaskText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form flex flex-col gap-3 p-4 border border-neon-green rounded-lg shadow-neon-green bg-gray-900 max-w-md mx-auto transition-transform duration-300 hover:scale-105">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Escribe una tarea"
        className="p-3 border border-neon-green bg-gray-800 text-neon-green rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="bg-neon-blue text-black p-3 rounded-lg hover:bg-neon-pink transition duration-300 hover:scale-105 shadow-neon-blue">
        {taskToEdit ? 'Editar Tarea' : 'Añadir Tarea'}
      </button>
    </form>
  );
};

export default TaskForm;