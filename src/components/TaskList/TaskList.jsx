import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, editTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul className="task-list space-y-3 p-4 bg-gray-900 border border-neon-green rounded-lg max-w-lg mx-auto">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          editTask={editTask} 
          deleteTask={deleteTask} 
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;