import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
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
	return `
  <html>
    <head></head>
    <body>
     <div id="root">${content}</div>
     <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
