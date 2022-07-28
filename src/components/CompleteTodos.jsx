import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">COMPLETE</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <button onClick={() => onClickBack(index)}>戻す</button>
              <div>{todo}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
