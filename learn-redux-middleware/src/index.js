import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
