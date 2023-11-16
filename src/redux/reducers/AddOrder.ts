import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../RootConfig";
import dayjs from "dayjs";

interface State {
  orders: {
    id: number;
    name: string;
    number: number;
    extranumber: number;
    time: string;
    status: boolean;
    typeorder: string;
  }[];
}
const initialState: State = {
  orders: [],
};
export const addReducer = createSlice({
  name: "order",
  initialState,
  reducers: {
    addHandler: (
      state,
      action: PayloadAction<{
        index: number;
        name: string;
        number: number;
        extranumber: number;
        time: string;
        status: boolean;
        typeorder: string;
      }>
    ) => {
      console.log(action.payload, "payload");
      const AddItem = {
        name: action?.payload?.name,
        number: action?.payload?.number,
        extranumber: action?.payload?.extranumber,
        id: new Date().getMilliseconds(),
        time: dayjs(new Date()).format("DD.MM.YYYY HH:mm"),
        status: action?.payload?.status,
        typeorder: action?.payload.typeorder,
      };
      state.orders.push(AddItem);
      console.log(AddItem, "additem");
    },
    removeHandler: (state, action: PayloadAction<number>) => {
      const filtered = state.orders.filter((_, index) => {
        return index !== action.payload;
      });
      state.orders = filtered;
    },
    updateHandler: (
      state,
      action: PayloadAction<{
        index: number;
        name: string;
        number: number;
        extranumber: number;
        time: number;
        status: boolean;
        typeorder: string;
      }>
    ) => {
      const { payload } = action;

      if (
        state.orders[payload.index]?.name &&
        state.orders[payload.index]?.number &&
        state.orders[payload.index]?.extranumber &&
        state.orders[payload.index]?.time &&
        state.orders[payload.index]?.status &&
        state.orders[payload.index]?.typeorder
      ) {
        state.orders[payload.index].name = payload.name;
        state.orders[payload.index].number = payload.number;
        state.orders[payload.index].extranumber = payload.extranumber;
        state.orders[payload.index].status = payload.status;
        state.orders[payload.index].typeorder = payload.typeorder;
      }
    },
  },
});

export const orderSelector = (state: RootState) => state.addorder.orders;

export const { addHandler, updateHandler, removeHandler } = addReducer.actions;

export default addReducer.reducer;
