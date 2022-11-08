import { createSlice } from "@reduxjs/toolkit";

// value stores key:value pairs, where the key is the book's isbn,
// and the values are the book's details (title, author, notes)
const initialState = {
  value: {},
};

class LibraryBook {
  constructor(title, author, olid) {
    this.title = title;
    this.author = author;
    this.olid = olid;
    this.notes = [];
  }
}

class Note {
  constructor() {
    this.highlight = "";
    this.note = "";
  }
}

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      const bookApiObj = action.payload.book;
      const isbn = bookApiObj.isbn[0];
      if (state.value[isbn]) {
        console.log("book already present");
        return { ...state };
      }
      console.log(bookApiObj);
      /* Use destructuring to convert class Object to a plain JS object
			Source: https://stackoverflow.com/questions/34699529/convert-javascript-class-instance-to-plain-object-preserving-methods
			
			# Why?
			- Payload passed to redux needs to be serializable: https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants
			- Only plain objects are serializable: https://developer.mozilla.org/en-US/docs/Glossary/Serializable_object#supported_objects
			*/
      const { ...book } = new LibraryBook(
        bookApiObj.title,
        bookApiObj.author_name,
        bookApiObj.cover_edition_key
      );

      // isbn[0] to access only the first isbn value, as API returns an array of isbn values
      return {
        ...state,
        value: {
          ...state.value,
          [bookApiObj.isbn[0]]: book,
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
      const { ...newNote } = new Note();
      console.log(state);
      return {
        ...state,
        value: {
          ...state.value,
          [isbn]: {
            ...state.value[isbn],
            notes: [...state.value[isbn].notes, newNote],
          },
        },
      };
    },
  },
});

export const { addToCollection, updateNotes, addNote } = librarySlice.actions;

export default librarySlice.reducer;
