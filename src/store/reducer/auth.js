import * as actionTypes from "../action/actionTypes";

const initialState = {
  token: null,
  id: null,
  loading: false,
  error: null
};

const authStart = state => {
  return {
    ...state,
    loading: true
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    id: action.id,
    loading: false,
    error: null
  };
};

const authFailed = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false
  };
};

const authLogout = state => {
  return {
    ...state,
    token: null,
    id: null,
    error: null
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAILED:
      return authFailed(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state);
    default:
      return state;
  }
};

export default reducer;
