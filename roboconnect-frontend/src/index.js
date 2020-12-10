import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";

import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
