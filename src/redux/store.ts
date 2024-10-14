import {configureStore} from '@reduxjs/toolkit';
import {favoriteSlice} from './slice';

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice.reducer,
  },
});
