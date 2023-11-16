import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/reducers";

const persistConfig = {
  key: "mastika",
  storage,
  whitelist: ["auth", "applications"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducer),
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
