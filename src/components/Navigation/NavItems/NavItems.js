import React from "react";

import cssNavItems from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const NavItems = props => (
  <ul className={cssNavItems.NavItems}>
    <NavItem active link="/" exact={true}>
      BurgerBuilder
    </NavItem>
    {props.isAuth ? <NavItem link="/orders">Orders</NavItem> : null}
    {props.isAuth ? <NavItem link="/logout">logout</NavItem> : <NavItem link="/auth">auth</NavItem>}
  </ul>
);

export default NavItems;
