// Client side Rendering starts here

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import routes from "../routes";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

const clientStore = createStore(()=>{}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={clientStore}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
