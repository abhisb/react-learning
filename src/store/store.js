// store.js
import { createStore } from "redux";
import counterReducer from "./reducers/countReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(counterReducer, composeWithDevTools());

export default store;
