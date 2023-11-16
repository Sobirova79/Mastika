import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/RootConfig.ts";
import BaseAPIClient from "./api/axios.Config.ts";

export const baseURL = "https://api.cakes.safiabakery.uz/";
// export const baseURL = "http://109.94.172.130:8000";
// export const baseURL = "http://10.0.0.36:8000";
export default new BaseAPIClient(baseURL, store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={"loading..."}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>,
);
