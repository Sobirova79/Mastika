import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/helpers";
import Navigations from "./components/Routes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigations />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
