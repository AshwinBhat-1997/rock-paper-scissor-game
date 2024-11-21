import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

const themeToggle = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeToggle.actions;
export default themeToggle.reducer;
