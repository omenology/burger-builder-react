import React, { Fragment } from "react";

import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = props.bahan.map((b, i) => {
    return (
      <li key={b.type + i}>
        {b.type} : {b.kuantitas}
      </li>
    );
  });

  return (
    <Fragment>
      <h1>Your Order</h1>
      <p>AAA delicious burger with the following ingredients :</p>
      <ul>{ingredientSummary}</ul>
      <strong>Price : {props.price}</strong>
      <p>Do you want to continue ?</p>
      <Button clicked={props.clickSucess} btnType="Success">
        Continue
        </Button>
      <Button clicked={props.clickCancel} btnType="Danger">
        Cancel
        </Button>
    </Fragment>
  );

}

export default OrderSummary;
