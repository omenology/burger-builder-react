import React from "react";
import Burger from "../../Burger/Burger.js";
import Button from "../../UI/Button/Button.js";

import css from "./CheckoutSummary.module.css";

const CheckoutSummary = props => {
  return (
    <div className={css.CheckoutSummary}>
      <h1>We hope it test well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger bahan={props.bahan} />
        <Button btnType="Danger" clicked={props.clickCancel}>
          Cancle
        </Button>
        <Button btnType="Success" clicked={props.clickSucess}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
