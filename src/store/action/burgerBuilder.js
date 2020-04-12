import * as actionTypes from "./actionTypes";
import axios from "../../axios-order";

export const addIngredient = index => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    index: index
  };
};

export const removeIngredient = index => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    index: index
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredient = () => {
  // return async dispatch => {
  //   try {
  //     const bahan = await axios.get("/bahan.json");
  //     dispatch(setIngredients(bahan.data));
  //   } catch (error) {
  //     dispatch(fetchIngredientsFailed());
  //   }
  // };
  return {
    type: actionTypes.INITIATE_INGREDIENT
  };
};
