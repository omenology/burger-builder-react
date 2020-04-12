import React from "react";

import css from "./Order.module.css";

const Order = props => {
  const bahan = props.bahan.map(b=>{
    if(b.kuantitas>0){
      return <span key={b.type}>{b.type} ({b.kuantitas}) </span>
    }else{
      return null
    }
  })
  
  return (
    <div className={css.Order}>
      <p>Ingredients: {bahan}</p>
      <p>
        Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
