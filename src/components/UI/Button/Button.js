import React from "react";
import cssButton from "./Button.module.css";

const Button = props => (
  <button
    onClick={props.clicked}
    disabled={props.disabled}
    className={[cssButton.Button, cssButton[props.btnType]].join(" ")}
  >
    {props.children}
  </button>
);

export default Button;
