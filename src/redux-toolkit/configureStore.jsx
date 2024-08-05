import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { upByValue } from "./counterSlice";
import globalSlice from "./globalSlice";
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
	counter: counterSlice,
	global: globalSlice,
})



// My custom middelware to logger store state
// const loggerMiddleware = (store) => (next) => (action) => {
// 	// Handle area
// 	console.log(action);
// 	action.payload = 10;
// 	delete action.payload;
// 	next(action);
// };

const store = configureStore({
	reducer,
	middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

// store.subscribe(() => {
// 	console.log(`Current state: ${store.getState().counter.count}`);
// });

// store.dispatch(upByValue(100));
// store.dispatch(upByValue(200));
// store.dispatch(upByValue(300));

// sagaMiddleware.run(rootSaga)

export default store;
