import React from "react";
import { NavLink } from "react-router-dom";

import cssNavItem from "./NavItem.module.css";

const NavItem = props => (
  <li className={cssNavItem.NavItem}>
    <NavLink
      to={props.link}
      activeClassName={cssNavItem.active}
      exact={props.exact}
    >
      {props.children}
    </NavLink>
  </li>
);

export default NavItem;
