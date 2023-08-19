import React from "react";
import TodoList from "./TodoList";

const TodoChart = ["Learning React", "Practice React", "Create React Project"];

function Todo() {
  return (
    <>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-4">
        Todo's
      </h2>
      <TodoList items={TodoChart} />
    </>
  );
}

export default Todo;
