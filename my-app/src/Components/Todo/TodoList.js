import React from "react";

function TodoList(props) {
  return (
    <>
      <ul>
        {props.items.map((todoLists) => (
          <li className="list-disc list-inside m-2">{todoLists}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
