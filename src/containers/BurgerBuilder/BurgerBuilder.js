import React, { useState, useEffect, Fragment, useCallback } from "react";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect, useDispatch, useSelector } from "react-redux";
import * as action from "../../store/action";

import axios from "../../axios-order";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

const BurgerBuilder = React.memo(props => {
  console.log("render burgerbuilder");
  const [purchasing, setPurchasing] = useState(false);
  const dispatch = useDispatch()

  const addIngredient = index => dispatch(action.addIngredient(index))
  const removeIngredient = index => dispatch(action.removeIngredient(index))
  const initIngredient = useCallback(() => dispatch(action.initIngredient()), [])
  const initOrder = () => dispatch(action.initOrder())

  const bahan = useSelector(state => state.burgerBuilder.bahan)
  const harga = useSelector(state => state.burgerBuilder.totalPrice)
  const error = useSelector(state => state.burgerBuilder.error)
  const isAuth = useSelector(state => state.auth.token !== null)

  useEffect(() => {
    initIngredient();
  }, []);

  const purchaseHandler = bahan => {
    const sum = bahan
      .map(b => {
        return b.harga * b.kuantitas;
      })
      .reduce((total, num) => {
        return total + num;
      });
    return sum > 0;
  };

  const purchasingHandler = () => {
    if (isAuth) {
      setPurchasing(true);
    } else {
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    initOrder();
    props.history.push({
      pathname: "/checkout"
    });
  };

  let burger = !error ? <Spinner /> : <p>error can't loaded the data</p>;
  let orderSummary = null;
  if (bahan.length > 0) {
    burger = (
      <Fragment>
        <Burger bahan={bahan} />
        <BuildControls
          added={addIngredient}
          removed={removeIngredient}
          price={harga.toFixed(2)}
          order={purchaseHandler(bahan)}
          isAuth={isAuth}
          purchaseing={purchasingHandler}
          bahan={bahan}
        />
      </Fragment>
    );
  }
  if (bahan.length > 0) {
    orderSummary = (
      <OrderSummary clickSucess={purchaseContinueHandler} clickCancel={purchaseCancelHandler} bahan={bahan} price={harga.toFixed(2)} />
    );
  }

  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Fragment>
  );
});





export default withErrorHandler(BurgerBuilder, axios);
