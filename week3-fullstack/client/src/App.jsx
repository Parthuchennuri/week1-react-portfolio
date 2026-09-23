import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Task Manager</h1>
      <p>Welcome to the Week 3 Full Stack Task Manager.</p>

      <Link to="/tasks">View Tasks</Link>
    </div>
  );
}

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const loadTasks = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Unable to load tasks");
        return;
      }

      setTasks(data);
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first.");
      return;
    }

    if (!title.trim()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to add task");
        return;
      }

      setTitle("");
      setMessage("");
      loadTasks();
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server");
    }
  };

  const updateTask = async (task) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5001/api/todos/${task._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: task.title,
            completed: !task.completed,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to update task");
        return;
      }

      setMessage("");
      loadTasks();
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server");
    }
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5001/api/todos/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to delete task");
        return;
      }

      setMessage("");
      loadTasks();
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server");
    }
  };

  return (
    <div>
      <h1>My Tasks</h1>

      {message && <p>{message}</p>}

      <input
        type="text"
        placeholder="Enter a task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              {task.title} -{" "}
              {task.completed ? "Completed" : "Pending"}

              {" "}

              <button onClick={() => updateTask(task)}>
                {task.completed ? "Mark Pending" : "Mark Complete"}
              </button>

              {" "}

              <button onClick={() => deleteTask(task._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <Link to="/">Back Home</Link>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      setMessage("Login successful!");
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      {message && <p>{message}</p>}

      <br />

      <Link to="/tasks">Go to Tasks</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/tasks">Tasks</Link>{" | "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;