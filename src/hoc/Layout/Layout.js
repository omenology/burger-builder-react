import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import cssLayout from "./Layout.module.css";

const Layout = props => {
  const [showDrawer, setShowDrawer] = useState(false)


  const sideDrawerHandler = () => {
    setShowDrawer(!showDrawer)
  };


  return (
    <Fragment>
      <Toolbar isAuth={props.isAuth} drawerToggle={sideDrawerHandler} />
      <SideDrawer isAuth={props.isAuth} show={showDrawer} drawerToggle={sideDrawerHandler} />
      <main className={cssLayout.content}>{props.children}</main>
    </Fragment>
  );

}

const mapStateTopProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

export default connect(mapStateTopProps)(Layout);
