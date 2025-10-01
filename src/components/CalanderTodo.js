import React, { useEffect, useState } from "react";
import "./CalendarTodo.css";

const LOCAL_KEY = "hud_calendar_todos";

function CalendarTodo() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAdd() {
    if (input.trim()) {
      setTodos([...todos, { text: input, done: false }]);
      setInput("");
    }
  }

  function toggleDone(idx) {
    setTodos(
      todos.map((todo, i) =>
        i === idx ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function removeTodo(idx) {
    setTodos(todos.filter((_, i) => i !== idx));
  }

  return (
    <div className="widget calendar-todo">
      <div className="widget-title">Calendar & To-Do</div>
      <div>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleAdd()}
          placeholder="Add a new to-do/event"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx} style={{ textDecoration: todo.done ? "line-through" : "" }}>
            <span onClick={() => toggleDone(idx)}>{todo.text}</span>
            <button onClick={() => removeTodo(idx)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalendarTodo;
