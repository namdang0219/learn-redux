import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
	name: "global",
	initialState: {
		darkMode: false,
		showSidebar: true,
	},
	reducers: {
		toggleDarkMode: (state, { payload }) => ({
			...state,
			darkMode: payload,
		}),
		toggleSidebar: (state) => ({
			...state,
			showSidebar: !state.showSidebar,
		}),
	},
});

export const { toggleDarkMode, toggleSidebar } = globalSlice.actions;

export default globalSlice.reducer;
