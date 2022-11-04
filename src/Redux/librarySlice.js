import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      // state.value.push(action.payload);
      // isbn[0] to access only the first isbn value, as API returns an array of isbn values
      // const isbn = action.payload.isbn[0];
      return {
        value: {
          ...state.value,
          [action.payload.isbn[0]]: action.payload.book,
        },
      };
    },
  },
});

export const { addToCollection } = librarySlice.actions;

export default librarySlice.reducer;
