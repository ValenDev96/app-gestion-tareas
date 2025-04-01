// src/App.jsx
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskStats from './components/TaskStats/TaskStats';

const App = () => {
  // Cargar las tareas desde localStorage al iniciar la aplicación
  const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(loadTasksFromLocalStorage());
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Guardar las tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  return (
    <div className="app">
      <h1 className="text-2xl font-bold text-center">Gestión de Tareas</h1>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <TaskStats tasks={tasks} />
      <TaskFilter setFilter={setFilter} currentFilter={filter} />
      <TaskList
        tasks={filteredTasks}
        editTask={setTaskToEdit}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
