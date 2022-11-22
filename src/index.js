// Comman js module syntax
import express from "express";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import renderer from "./utils/renderer";
import createStore from "./utils/serverStore";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("*", (request, response) => {
	const store = createStore(() => {}, applyMiddleware(thunk));
	response.send(renderer(request, store));
});

app.listen(port, () => {
	console.log(`Pro Budget is running in port ${port}`);
});
