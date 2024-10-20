// store.js
import { createStore } from "redux";
import counterReducer from "./reducers/countReducer";
import { composeWithDevTools } from "redux-devtools-extension"; // To enable redux extension in Chrome browser - to debug store actions and state

const store = createStore(counterReducer, composeWithDevTools());

export default store;
