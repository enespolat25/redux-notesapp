import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      {
        id: nanoid(),
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        color: "yellow",
      },
      {
        id: nanoid(),
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        color: "red",
      },
    ],
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
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
