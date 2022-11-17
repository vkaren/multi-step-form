import React from "react";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.label.toLowerCase()}>{props.label}</label>
      <input
        type={props.type}
        name={props.label.toLowerCase()}
        id={props.label.toLowerCase()}
        onInput={props.onInput}
        minLength={props.type === "password" ? "8" : "2"}
        value={props.value}
        required
      />
    </div>
  );
}

export default Input;
