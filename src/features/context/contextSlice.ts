import { SelectedPage } from "./../../shared/types";
import { createSlice } from "@reduxjs/toolkit";

const contextSlice = createSlice({
  name: "context",
  initialState: {
    selectedPage: SelectedPage.Home,
    isTopOfPage: true,
    flexBetween: "flex items-center justify-between",
  },
  reducers: {
    setSelectPage: (state, action) => {
      state.selectedPage = action.payload;
    },
    setIsTopOfPage: (state, action) => {
      state.isTopOfPage = action.payload;
    },
  },
});

export const { setSelectPage, setIsTopOfPage } = contextSlice.actions;
export default contextSlice.reducer;
