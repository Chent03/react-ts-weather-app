import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

import { App } from "./components/App";
import { rootReducer } from './reducers';

import promise from 'redux-promise';

import "./styles/style.scss";

const store = createStore(rootReducer, applyMiddleware(promise))

const ROOT = document.querySelector(".container");

ReactDOM.render(
    <Provider store={store}>
        <App>Hello</App>
    </Provider>    
    , ROOT);