import * as actionTypes from "../action/actionTypes";

const initialState = {
  loading: false,
  purchased: false,
  order: [],
  error: false
};

const orderStart = state => {
  return { ...state, loading: true };
};

const orderSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  };

  return {
    ...state,
    loading: false,
    purchased: true,
    order: state.order.concat(newOrder)
  };
};

const orderFailed = state => {
  return { ...state, loading: false };
};

const fetchOrderStart = state => {
  return { ...state, loading: true };
};

const fetchOrderSuccess = (state, action) => {
  return {
    ...state,
    order: action.orderData,
    loading: false
  };
};

const purchased = (state, action) => {
  return { ...state, purchased: false };
};

const fetchOrderFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_START:
      return orderStart(state);
    case actionTypes.ORDER_SUCCESS:
      return orderSuccess(state, action);
    case actionTypes.ORDER_FAILED:
      return orderFailed(state);
    case actionTypes.FETCH_ORDER_START:
      return fetchOrderStart(state);
    case actionTypes.FETCH_ORDER_SUCCESS:
      return fetchOrderSuccess(state, action);
    case actionTypes.FETCH_ORDER_FAILED:
      return fetchOrderFailed(state, action);
    case actionTypes.PURCHASED:
      return purchased(state, action);
    default:
      return state;
  }
};

export default reducer;
