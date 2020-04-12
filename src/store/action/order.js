import * as actionTypes from "./actionTypes";
import axios from "../../axios-order";

export const OrderStart = () => {
  return {
    type: actionTypes.ORDER_START,
  };
};

export const OrderSuccess = (id, orderData) => {
  return {
    type: actionTypes.ORDER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const OrderFailed = (err) => {
  return {
    type: actionTypes.ORDER_FAILED,
    error: err,
  };
};

export const initOrder = () => {
  return {
    type: actionTypes.PURCHASED,
  };
};

export const purchaseBurgerStart = (orderData, token) => {
  // return async dispatch => {
  //   dispatch(OrderStart());
  //   try {
  //     const data = await axios.post(`/orders.json?auth=${token}`, orderData);
  //     console.log(data);
  //     dispatch(OrderSuccess(data.data.name, orderData));
  //   } catch (error) {
  //     dispatch(OrderFailed(error));
  //   }
  // };

  return {
    type: actionTypes.PURCHASE_START,
    token: token,
    orderData: orderData,
  };
};

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDER_START,
  };
};

export const fetchOrderSuccess = (data) => {
  return {
    type: actionTypes.FETCH_ORDER_SUCCESS,
    orderData: data,
  };
};

export const fetchOrderFaild = (err) => {
  return {
    type: actionTypes.FETCH_ORDER_FAILED,
    error: err,
  };
};

export const fetchOrder = (token, userId) => {
  return async (dispatch) => {
    dispatch(fetchOrderStart());
    try {
      const data = await axios.get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`);
      let orders = [];
      for (var key in data.data) {
        orders.push({ id: key, ...data.data[key] });
      }

      dispatch(fetchOrderSuccess(orders));
    } catch (error) {
      dispatch(fetchOrderFaild(error));
    }
  };
};
