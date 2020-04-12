import React, { Fragment } from "react";

import css from "./Input.module.css";

const Input = props => {
  let inputElement = null;
  const style = [css.InputElement];
  if (!props.validate && props.touched) style.push(css.Invalid);
  switch (props.elementType) {
    case "textarea":
      inputElement = (
        <Fragment>
          <label></label>
          <textarea
            onChange={props.changed}
            className={style.join(" ")}
            {...props.elementConfig}
            value={props.value}
          />
        </Fragment>
      );
      break;

    case "input":
      inputElement = (
        <input
          onChange={props.changed}
          className={style.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;

    case "select":
      inputElement = (
        <select onChange={props.changed} className={style.join(" ")} value={props.value}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          onChange={props.changed}
          className={style.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
  }
  return (
    <div className={css.Input}>
      <label className={css.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
