import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./colors/colorsSlice";
import notesSlice from "./notes/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    colors: colorsSlice,
  },
});
