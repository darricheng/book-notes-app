import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import notesReducer from "./notesReducer";

// Documentation: https://redux-toolkit.js.org/tutorials/quick-start#provide-the-redux-store-to-react

export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
  },
});
