import axios from "axios";
import { put, delay, call } from "redux-saga/effects";

import * as actions from "../action/index";

export function* logoutSaga(action) {
  yield call([localStorage, "removeItem"], "token");
  // yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("localId");
  yield put(actions.authDidLogout());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.authLogout());
}

export function* authSaga(action) {
  yield put(actions.authStart());

  try {
    const dataRegister = {
      email: action.email,
      password: action.password,
      returnSecureToken: true
    };

    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6PIl-P2C2K-bkr4MvBWyA3EoxNIFWIcQ";

    if (action.signup) url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6PIl-P2C2K-bkr4MvBWyA3EoxNIFWIcQ";

    const response = yield axios.post(url, dataRegister);

    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("localId", response.data.localId);

    yield put(actions.checkAuthTimeout(response.data.expiresIn));
    yield put(actions.authSuccess(response.data));
  } catch (error) {
    yield put(actions.atuhFailed(error.response.data.error));
  }
}

export function* checkAuthStateSaga(action) {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.authLogout());
  } else {
    const expirationDate = yield new Date(localStorage.getItem("expirationDate"));
    if (expirationDate <= new Date()) {
      yield put(actions.authLogout());
    } else {
      const data = {
        idToken: token,
        localId: yield localStorage.getItem("localId")
      };
      yield put(actions.authSuccess(data));
      yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    }
  }
}
