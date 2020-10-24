import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import GlobalStyle from "./library/css/GlobalStyle";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
