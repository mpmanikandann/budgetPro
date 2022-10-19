import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import routes from "../routes";

export default (request, store) => {
  const context = {};
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={request.url}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return renderHtml(content);
};

const renderHtml = (content) => {
  return `
  <html>
    <head>
      <title>
       Budget Pro
      </title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </head>
    <body>
     <div id="root">${content}</div>
     <script src="bundle.js"></script>
    </body>
  </html>
  `;
}