import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./fonts/globalFonts.css";

import ThemeProvider from "./contexts/ThemeProvider";
import QueryProvider from "./contexts/QueryProvider";
import LocalStorageProvider from "./contexts/LocalStorageProvider";
import { GlobalStyle } from "./utils/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <QueryProvider>
        <LocalStorageProvider>
          <App />
        </LocalStorageProvider>
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
