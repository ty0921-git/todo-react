import React from "react";

const style = {
  backgroundColor: "#c8e6c9",
  padding: "1rem"
};

const inputStyle = {
  padding: "0.5rem",
  border: "none",
  outline: "none"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        style={inputStyle}
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
