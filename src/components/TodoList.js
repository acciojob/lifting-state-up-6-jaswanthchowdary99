import React from "react";

export default function TodoList({ list, onComplete }) {
  console.log(list);
  return (
    <>
      <div>
        <h2>Child Component</h2>
        <ul>
          {list.map((todo) =>
            todo.complete ? (
              <li key={todo.id}>{todo.text}</li>
            ) : (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => onComplete(todo.id)}>complete</button>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
