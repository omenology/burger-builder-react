import React from "react";

import cssToolbar from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => (
  <header className={cssToolbar.Toolbar}>
    <DrawerToggle clicked={props.drawerToggle} />
    <Logo cssLogo={cssToolbar.Logo} />
    <div className={cssToolbar.DesktopOnly}>
      <NavItems isAuth={props.isAuth} />
    </div>
  </header>
);

export default Toolbar;
