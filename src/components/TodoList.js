import React from "react";

export default function TodoList({ todos, onComplete }) {
  return (
    <>
      <div>
        <h2>Child Component</h2>
        <ul>
          {todos.map((todo) =>
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
