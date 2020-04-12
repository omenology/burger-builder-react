import { takeEvery } from "redux-saga/effects";

import * as actionType from "../action/actionTypes";
import { logoutSaga, checkAuthTimeoutSaga, authSaga, checkAuthStateSaga } from "./auth";
import { initIngredientSaga } from "./burgerBuilder";
import { purchaseBurgerStartSaga } from "./order";

export function* authListener(action) {
  yield takeEvery(actionType.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionType.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionType.AUTH_USER, authSaga);
  yield takeEvery(actionType.AUTH_CHECK_STATE, checkAuthStateSaga);
}

export function* burgerBuilderListener(action) {
  yield takeEvery(actionType.INITIATE_INGREDIENT, initIngredientSaga);
}

export function* orderListener(action) {
  yield takeEvery(actionType.PURCHASE_START, purchaseBurgerStartSaga);
  //yield takeEvery();
}
