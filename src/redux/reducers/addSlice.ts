import { createSlice } from "@reduxjs/toolkit";
// import { TodoItem } from "../components/pages/AddRole/todos/TodoItem";

interface State {
  orders: {
    id: string;
    name: string;
    number: number;
    extranumber: number;
  }[];
}
const initialState: State = {
  orders: [],
};
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orders.push({
        id: new Date().toISOString(),
        number: action.payload.number,
        name: action.payload.name,
        extranumber: action.payload.number,
      });
    },
  },
});

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;
