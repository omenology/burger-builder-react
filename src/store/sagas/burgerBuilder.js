import axios from "../../axios-order";
import { put } from "redux-saga/effects";

import * as actions from "../action/index";

export function* initIngredientSaga(action) {
  try {
    const bahan = yield axios.get("/bahan.json");
    yield put(actions.setIngredients(bahan.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
