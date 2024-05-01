import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./fonts/globalFonts.css";

import ThemeProvider from "./contexts/ThemeProvider";
import { GlobalStyle } from "./utils/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
