import React, { Fragment } from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import cssSideDrawer from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
  let attachedClass = [cssSideDrawer.SideDrawer, cssSideDrawer.Close];
  if (props.show) {
    attachedClass = [cssSideDrawer.SideDrawer, cssSideDrawer.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.drawerToggle} />
      <div className={attachedClass.join(" ")}>
        <Logo cssLogo={cssSideDrawer.Logo} />
        <nav>
          <NavItems isAuth={props.isAuth} />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
