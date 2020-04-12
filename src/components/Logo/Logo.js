import React from "react";

import LogoImage from "../../assets/images/burger-logo.png";
import cssLogo from "./Logo.module.css";

const Logo = props => (
  <div className={[cssLogo.Logo, props.cssLogo].join(" ")}>
    <img src={LogoImage} alt="logo" />
  </div>
);

export default Logo;
