import React from "react";
import { withRouter } from "react-router-dom";

import cssBurger from "./Burger.module.css";
import BIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let transformBahan = props.bahan
    .map(b => {
      return [...Array(b.kuantitas)].map((_, i) => {
        return <BIngredient key={b.type + i} type={b.type} />;
      });
    })
    .reduce((cur, el) => {
      return cur.concat(el);
    }, []);

  if (transformBahan.length === 0)
    transformBahan = <p>Please start adding ingredients</p>;

  return (
    <div className={cssBurger.Burger}>
      <BIngredient type="bread-top" />
      {transformBahan}
      <BIngredient type="bread-bottom" />
      <p></p>
    </div>
  );
};

export default withRouter(Burger);
