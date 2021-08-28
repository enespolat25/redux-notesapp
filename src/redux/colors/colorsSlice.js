import { createSlice } from "@reduxjs/toolkit";

export const colorsSlice = createSlice({
  name: "colors",
  initialState: {
    color: "green",
    colorbtns: [
      {
        value: "red",
        checked: false,
      },
      {
        value: "purple",
        checked: false,
      },
      {
        value: "yellow",
        checked: false,
      },
      {
        value: "blue",
        checked: false,
      },
      {
        value: "green",
        checked: true,
      },
    ],
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    toggleCheck: (state, action) => {
      const incomingvalue = action.payload;
      for (let i = 0; i < state.colorbtns.length; i++) {
        state.colorbtns[i].checked = false;
      }
      const mybtn = state.colorbtns.find((btn) => btn.value === incomingvalue);
      mybtn.checked = !mybtn.checked;
    },
  },
});

export const { setColor, toggleCheck } = colorsSlice.actions;
export default colorsSlice.reducer;
