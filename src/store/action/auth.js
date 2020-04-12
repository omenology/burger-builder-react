import * as actionTypes from "./actionTypes";
//import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = data => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: data.idToken,
    id: data.localId
  };
};

export const atuhFailed = err => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: err
  };
};

export const authLogout = () => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("expirationDate");
  // localStorage.removeItem("localId");
  // return {
  //   type: actionTypes.AUTH_LOGOUT
  // };

  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT
  };
};

export const authDidLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch(authLogout());
  //   }, expirationTime * 1000);
  // };

  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime
  };
};

export const auth = (email, password, signup) => {
  // return async dispatch => {
  //   dispatch(authStart());
  //   try {
  //     const dataRegister = {
  //       email: email,
  //       password: password,
  //       returnSecureToken: true
  //     };
  //     let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6PIl-P2C2K-bkr4MvBWyA3EoxNIFWIcQ";
  //     if (signup) url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6PIl-P2C2K-bkr4MvBWyA3EoxNIFWIcQ";
  //     const data = await axios.post(url, dataRegister);
  //     console.log(data);
  //     const expirationDate = new Date(new Date().getTime() + data.data.expiresIn * 1000);
  //     localStorage.setItem("token", data.data.idToken);
  //     localStorage.setItem("expirationDate", expirationDate);
  //     localStorage.setItem("localId", data.data.localId);
  //     dispatch(checkAuthTimeout(data.data.expiresIn));
  //     dispatch(authSuccess(data.data));
  //   } catch (error) {
  //     console.log(error.response.data);
  //     dispatch(atuhFailed(error.response.data.error));
  //   }
  // };
  return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password,
    signup: signup
  };
};

export const checkAuthState = () => {
  // return async dispatch => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     dispatch(authLogout());
  //   } else {
  //     const expirationDate = new Date(localStorage.getItem("expirationDate"));
  //     if (expirationDate <= new Date()) {
  //       dispatch(authLogout());
  //     } else {
  //       const data = {
  //         idToken: token,
  //         localId: localStorage.getItem("localId")
  //       };
  //       dispatch(authSuccess(data));
  //       dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
  //     }
  //   }
  // };
  return {
    type: actionTypes.AUTH_CHECK_STATE
  };
};
