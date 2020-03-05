import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import history from "./app/history";
import "./assets/font/inter.css";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import muiTheme from "./app/muiTheme";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StylesProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
