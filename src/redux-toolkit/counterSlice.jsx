import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: {
		count: 0,
	},
	reducers: {
		up: (state) => ({
			...state,
			count: state.count + 1,
		}),
		down: (state) => ({
			...state,
			count: state.count - 1,
		}),
		downByValue: (state, action) => ({
			...state,
			count: state.count - action.payload.value,
		}),
		upByValue: (state, action) => ({
			...state,
			count: state.count + action.payload.value,
		}),
	},
});

export const { up, down, downByValue, upByValue } = counterSlice.actions;

export default counterSlice.reducer;
