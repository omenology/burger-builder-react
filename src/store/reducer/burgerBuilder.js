import * as actionTypes from "../action/actionTypes";

const initialState = {
  bahan: [],
  totalPrice: 1.5,
  error: false,
  building: false
};

const addIngredient = (state, action) => {
  const updateState = JSON.parse(JSON.stringify(state));
  updateState.bahan[action.index].kuantitas += 1;
  updateState.totalPrice += updateState.bahan[action.index].harga;
  updateState.building = updateState.bahan.filter(d => d.kuantitas > 0).length > 0;
  return updateState;
};

const removeIngredient = (state, action) => {
  const updateState = JSON.parse(JSON.stringify(state));
  updateState.bahan[action.index].kuantitas -= 1;
  updateState.totalPrice -= updateState.bahan[action.index].harga;
  updateState.building = updateState.bahan.filter(d => d.kuantitas > 0).length > 0;
  return updateState;
};

const setIngredients = (state, action) => {
  return {
    ...state,
    bahan: action.ingredients,
    totalPrice: 1.5,
    error: false,
    building: false
  };
};

const fetchIngredientsFailed = (state, action) => {
  return { ...state, error: true };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
