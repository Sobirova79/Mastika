import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./reducers/addSlice";

export default configureStore({
  reducer: {
    orders: addReducer,
  },
});
