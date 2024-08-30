import React, { useState } from 'react';
import './ToDo.css';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false}]);
            setNewTask('');
        }
    };

    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
           task.id === taskId ? { ...task, completed: !task.completed } : task
     )
    );
    };
    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="todo-app">
      <h1>Todo App</h1>
        <div className="input-container">
          <input type="text" value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
         placeholder="Enter a new task"/>
         <button onClick={addTask}>Add Task</button>
            </div>
            <ul class="ul">
               {tasks.map((task) => (
              <li key={task.id} className={task.completed ? 'completed' : ''}>
             <input type="checkbox" checked={task.completed}
               onChange={() => toggleTask(task.id)}/>
               <span>{task.text}</span>
               <button onClick={() => deleteTask(task.id)} class="delete-btn">Delete</button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;