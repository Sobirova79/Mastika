import { combineReducers } from "@reduxjs/toolkit";
import addorder from "./AddOrder";
import auth from "./auth";
import addSlice from "./addSlice";

export default combineReducers({
  addorder,
  auth,
  addSlice,
});
