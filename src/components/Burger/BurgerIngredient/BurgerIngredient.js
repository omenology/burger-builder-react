import React, { Component } from "react";
import PropTypes from "prop-types";

import cssBIngredient from "./BurgerIngredient.module.css";

const BurgerIngredient = props => {

  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={cssBIngredient.BreadBottom}></div>;
      break;

    case "bread-top":
      ingredient = (
        <div className={cssBIngredient.BreadTop}>
          <div className={cssBIngredient.Seeds1}></div>
          <div className={cssBIngredient.Seeds2}></div>
        </div>
      );
      break;

    case "meat":
      ingredient = <div className={cssBIngredient.Meat}></div>;
      break;

    case "bacon":
      ingredient = <div className={cssBIngredient.Bacon}></div>;
      break;

    case "cheese":
      ingredient = <div className={cssBIngredient.Cheese}></div>;
      break;

    case "salad":
      ingredient = <div className={cssBIngredient.Salad}></div>;
      break;

    default:
      ingredient = null;
      break;
  }

  return ingredient;

}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
