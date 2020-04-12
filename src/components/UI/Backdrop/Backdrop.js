import React from "react";

import cssBackdrop from "./Backdrop.module.css";

const Backdrop = props => (props.show ? <div onClick={props.clicked} className={cssBackdrop.Backdrop}></div> : null);

export default Backdrop;
