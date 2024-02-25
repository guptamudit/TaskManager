import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      task,
      dueDate,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
    setDueDate("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <nav className="relative flex items-center justify-around h-14 bg-blue-100 text-black px-4">
        <div className="mt-10">
          <h1 className="text-4xl font-bold">Task Manager</h1>
        </div>
      </nav>
      <div className="bg-blue-100 h-screen px-4 py-8">
        <form
          className="flex items-center justify-center mb-8"
          onSubmit={addTask}
        >
          <input
            type="text"
            className="mr-4 p-2 rounded-lg border-2 border-blue-500"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="date"
            className="mr-4 p-2 rounded-lg border-2 border-blue-500"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700 transition-colors">
            Add Task
          </button>
          <button className="bg-red-500 p-2 ml-2 rounded-lg text-white hover:bg-blue-700 transition-colors">
            Logout
          </button>
        </form>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.isComplete}
                  onChange={() => toggleComplete(task.id)}
                  className="mr-2 cursor-pointer"
                />
                <span className={task.isComplete ? "line-through" : ""}>
                  {task.task}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-4">{task.dueDate}</span>
                <button
                  className="bg-red-600 p-2 rounded-lg text-white hover:bg-red-700 transition-colors"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
