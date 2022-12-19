import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import PuzzleContextProvider from "./context/puzzle-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PuzzleContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PuzzleContextProvider>
);
