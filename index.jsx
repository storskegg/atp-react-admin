import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./src/AppRouter";

import store from "redux/store";

import "styles/header.scss";

render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById("react")
);
