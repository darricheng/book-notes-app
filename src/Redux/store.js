import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./librarySlice";

// Documentation: https://redux-toolkit.js.org/tutorials/quick-start#provide-the-redux-store-to-react

export const store = configureStore({
  reducer: {
    library: libraryReducer,
  },
});
