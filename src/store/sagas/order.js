import axios from "../../axios-order";
import { put } from "redux-saga/effects";

import * as actions from "../action/index";

export function* purchaseBurgerStartSaga(action) {
  yield put(actions.OrderStart());
  try {
    const data = yield axios.post(`/orders.json?auth=${action.token}`, action.orderData);
    console.log(data);
    yield put(actions.OrderSuccess(data.data.name, action.orderData));
  } catch (error) {
    yield put(actions.OrderFailed(error));
  }
}
