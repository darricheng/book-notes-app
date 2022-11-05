import { createSlice } from "@reduxjs/toolkit";

// value stores key:value pairs, where the key is the book's isbn,
// and the values are the book's details (title, author, notes)
const initialState = {
  value: {},
};

/**
 * See SearchBooks.js for the class definition
class LibraryBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.notes = [];
  }
}
*/

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
    saveNotes: (state, action) => {
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload.isbn]: {
            ...state.value[action.payload.isbn],
            notes: action.payload.notes,
          },
        },
      };
    },
  },
});

export const { addToCollection, saveNotes } = librarySlice.actions;

export default librarySlice.reducer;
