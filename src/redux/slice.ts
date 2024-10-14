import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  meals: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      if (!state.meals.find(item => item.idMeal === action.payload.idMeal)) {
        console.log('added');
        state.meals = [...state.meals, action.payload];
      } else {
        state.meals = state.meals.filter(
          item => item.idMeal !== action.payload.idMeal,
        );
      }
    },
    deleteFavorites: (state, action) => {
      if (state.meals.find(item => item.idMeal === action.payload.idMeal)) {
        state.meals = state.meals.filter(
          item => item.idMeal !== action.payload.idMeal,
        );
      }
    },
  },
});
