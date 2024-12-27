import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { store } from "./redux/store";
import { Toaster } from "./components/ui/toaster";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <AppRouter />
      </BrowserRouter>
      <Toaster />
    </Provider>
  </StrictMode>
);
