import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    AddinStart: (state) => {
      state.isFetching = true;
    },
    AddingSucceed: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    AddingError: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});
export const { AddinStart, AddingSucceed, AddingError } = ProductSlice.actions;
export default ProductSlice.reducer;
