import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAddTask = () => {
    setTodoList([...todoList, input]);
  };
  console.log(todoList);

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        className="border p-2 rounded-2xl"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Todo;
