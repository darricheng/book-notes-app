import { createSlice } from "@reduxjs/toolkit";

// value stores key:value pairs, where the key is the book's isbn,
// and the values are the book's details (title, author, notes)
const initialState = {
  value: {},
};

/**
 * See SearchBooks.js for the class definition
 * ! Ideally, the class should be defined here
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
      // isbn[0] to access only the first isbn value, as API returns an array of isbn values
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload.isbn[0]]: action.payload.book,
        },
      };
    },
    updateNotes: (state, action) => {
      console.log(action);
      const isbn = action.payload.isbn;
      const type = action.payload.type;
      const value = action.payload.value;
      const index = action.payload.index;
      const resArr = state.value[isbn].notes.map((el, i) => {
        if (i === index) {
          return {
            ...el,
            [type]: value,
          };
        } else {
          return el;
        }
      });
      return {
        ...state,
        value: {
          ...state.value,
          [isbn]: {
            ...state.value[isbn],
            notes: resArr,
          },
        },
      };
    },
    addNote: (state, action) => {
      const isbn = action.payload.isbn;
      console.log(state);
      return {
        ...state,
        value: {
          ...state.value,
          [isbn]: {
            ...state.value[isbn],
            notes: [...state.value[isbn].notes, { highlight: "", note: "" }],
          },
        },
      };
    },
  },
});

export const { addToCollection, updateNotes, addNote } = librarySlice.actions;

export default librarySlice.reducer;
