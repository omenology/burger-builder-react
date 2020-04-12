import React from "react";

import cssBuildControls from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = props => (
  <div className={cssBuildControls.BuildControls}>
    <p>
      Current Price : <strong>{props.price}</strong>
    </p>
    {props.bahan.map((b, i) => {
      return (
        <BuildControl key={b.type} label={b.type} added={() => props.added(i)} removed={() => props.removed(i)} disabledInfo={b.kuantitas <= 0} />
      );
    })}
    <button disabled={!props.order} className={cssBuildControls.OrderButton} onClick={props.purchaseing}>
      {props.isAuth ? "Order Now" : "Signup to Order"}
    </button>
  </div>
);

export default BuildControls;
