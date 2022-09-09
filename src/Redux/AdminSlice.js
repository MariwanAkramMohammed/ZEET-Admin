import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "Admin",
  initialState: {
    currentAdmin: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    FetchingStart: (state) => {
      state.isFetching = true;
    },
    FetchingSucceed: (state, action) => {
      state.isFetching = false;
      state.currentAdmin = action.payload;
    },
    FetchingError: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});
export const { FetchingStart, FetchingSucceed, FetchingError } =
  AdminSlice.actions;
export default AdminSlice.reducer;
