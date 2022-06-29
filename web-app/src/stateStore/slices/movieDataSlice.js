import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieData: [],
};

export const movieDataSlice = createSlice({
  name: 'pageState',
  initialState,
  reducers: {
    addMovieData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.movieData = [...action.payload];
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addMovieData } = movieDataSlice.actions;

export default movieDataSlice.reducer;
