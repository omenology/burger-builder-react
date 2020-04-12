import React, { useEffect } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as action from "../../store/action";

import Order from "../../components/Order/Order.js";

const Orders = (props) => {
  console.log("RENDER ORDERS.JS", props.order);
  useEffect(() => {
    props.fetchOrder(props.token, props.userId);
  }, []);

  let orders = <Spinner />;
  if (!props.loading) {
    orders = props.orders.map((data) => {
      return <Order key={data.id} bahan={data.ingredients} price={data.totalPrice} />;
    });
  }
  return <div>{orders}</div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.order,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: (token, userId) => dispatch(action.fetchOrder(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
