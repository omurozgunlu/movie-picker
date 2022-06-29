import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';
import movieReducer from './slices/movieDataSlice';
export const store = configureStore({
  reducer: {
    pageState: pageReducer,
    movieData: movieReducer,
  },
});
