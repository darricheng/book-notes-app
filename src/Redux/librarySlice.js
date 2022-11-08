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
      // isbn[0] to access only the first isbn value, as API returns an array of isbn values
      const isbn = bookApiObj.isbn[0];
      /* Use destructuring to convert class Object to a plain JS object
			Source: https://stackoverflow.com/questions/34699529/convert-javascript-class-instance-to-plain-object-preserving-methods
			
			# Why?
			- Payload passed to redux needs to be serializable: https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants
			- Only plain objects are serializable: https://developer.mozilla.org/en-US/docs/Glossary/Serializable_object#supported_objects
			*/
      const { ...newBook } = new LibraryBook(
        bookApiObj.title,
        bookApiObj.author_name,
        bookApiObj.cover_edition_key
      );
      // Init new books with one empty note
      const { ...newNote } = new Note();
      newBook.notes.push(newNote);

      return {
        ...state,
        value: {
          ...state.value,
          [isbn]: newBook,
        },
      };
    },
    updateNotes: (state, action) => {
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
    deleteNote: (state, action) => {
      const isbn = action.payload.isbn;
      const index = action.payload.index;
      const filteredNotes = state.value[isbn].notes.filter(
        (note, i) => i !== index
      );
      return {
        ...state,
        value: {
          ...state.value,
          [isbn]: {
            ...state.value[isbn],
            notes: [...filteredNotes],
          },
        },
      };
    },
    deleteLibBook: (state, action) => {
      const isbn = action.payload.isbn;
      const { ...tempState } = state.value;
      delete tempState[isbn];
      return {
        ...state,
        value: tempState,
      };
    },
  },
});

export const {
  addToCollection,
  updateNotes,
  addNote,
  deleteNote,
  deleteLibBook,
} = librarySlice.actions;

export default librarySlice.reducer;
