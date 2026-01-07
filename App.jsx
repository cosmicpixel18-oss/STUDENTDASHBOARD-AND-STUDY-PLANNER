import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  const addTask = () => {
    if (task === "") {
      alert("Please type a task!");
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  };

  const saveNote = () => {
    if (note === "") {
      alert("Enter something before saving!");
      return;
    }
    setMessage("Your note has been saved!");
  };

  return (
    <div>
      <header>
        <h1>My Simple Student Dashboard</h1>
        <p>Created by Students of Spurthy Nikethan & Vidya Jyothi High School</p>
      </header>

      <nav className="navbar">
        <div className="logo">EduFlow</div>
        <ul className="nav-links">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Timetable</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>

      <section className="card">
        <h2>Student Profiles</h2>
        <p>Name: B Durgashree</p>
        <p>School: Vidya Jyothi High School</p>
        <br />
        <p>Name: Daniya Ali</p>
        <p>School: Spurthy Nikethan High School</p>
      </section>

      <section className="card">
        <h2>My Tasks</h2>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
        <input
          type="text"
          value={task}
          placeholder="Enter the task here"
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <button onClick={addTask}>Add Task</button>
      </section>

      <section className="card">
        <h2>Quick Notes</h2>
        <textarea
          value={note}
          placeholder="Enter your note..."
          onChange={(e) => setNote(e.target.value)}
        />
        <br />
        <button onClick={saveNote}>Save Note</button>
        <p id="savedMsg">{message}</p>
      </section>
    </div>
  );
}

export default App;