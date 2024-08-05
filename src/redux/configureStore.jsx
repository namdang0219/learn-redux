import { createStore, combineReducers } from "redux";
import { countReducer } from "./counter";

const reducer = combineReducers({
	// key: value
	counter: countReducer,
});

const store = createStore(reducer);

export default store;
