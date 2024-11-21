import { configureStore } from "@reduxjs/toolkit";
import themeToggleSlice from "./features/Theme/ThemeToggleSlice";

export const store = configureStore({
  reducer: {
    theme: themeToggleSlice,
  },
});
