import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Task = () => {
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state);
  console.log(task.tasks);

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "ADD_TASK", payload: "Hello 123" })}
        className="border border-black"
      >
        Add Task
      </button>
    </div>
  );
};
