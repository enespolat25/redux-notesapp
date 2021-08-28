import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      {
        id: nanoid(),
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        color: "green",
      },
      {
        id: nanoid(),
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        color: "blue",
      },
      {
        id: nanoid(),
        text: "Omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        color: "yellow",
      },
    ],
    searchValue: "",
  },
  reducers: {
    addNote: (state, action) => {
      const { text } = action.payload;
      const { color } = action.payload;

      state.notes.push({
        id: nanoid(),
        text: text,
        color: color,
      });
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    destroyNote: (state, action) => {
      const id = action.payload;
      console.log("slice id", id);
      const filtered = state.notes.filter((note) => note.id !== id);
      state.notes = filtered;
    },
  },
});

export const { addNote, setSearchValue, destroyNote } = notesSlice.actions;
export default notesSlice.reducer;
