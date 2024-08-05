import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const reducer = combineReducers({
	counter: counterSlice,
});

const store = configureStore({
	reducer: reducer,
});

export default store;
