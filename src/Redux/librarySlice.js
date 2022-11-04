import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addToCollection } = librarySlice.actions;

export default librarySlice.reducer;
