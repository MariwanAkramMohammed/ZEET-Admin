import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./AdminSlice";
import ProductSlice from "./ProductSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};


const persistAdmin=persistReducer(persistConfig,AdminSlice);

export const store = configureStore({
  reducer: {
    Admin: persistAdmin,
    product: ProductSlice,
  },
});
export let persistor=persistStore(store);