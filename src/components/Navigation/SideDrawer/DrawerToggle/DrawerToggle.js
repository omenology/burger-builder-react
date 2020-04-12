import React from "react";

import cssDrawer from "./DrawerToggle.module.css";

const DrawerToggle = props => (
  <div className={cssDrawer.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
