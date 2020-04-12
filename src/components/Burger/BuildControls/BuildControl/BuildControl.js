import React from "react";

import cssBuildControl from "./BuildControl.module.css";

const BuildControl = props => (
  <div className={cssBuildControl.BuildControl}>
    <div style={{ textTransform: "capitalize" }} className={cssBuildControl.Label}>
      {props.label}
    </div>
    <button className={cssBuildControl.Less} onClick={props.removed} disabled={props.disabledInfo}>
      Less
    </button>
    <button className={cssBuildControl.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;
