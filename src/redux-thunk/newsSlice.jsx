import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import requestGetNews from "../sagas/news/requests";

export const handleFetchNews = createAsyncThunk(
	"news/handleFetchNews",
	async (query, thunkAPI) => {
		console.log("🚀 ~ query:", query);
		console.log("🚀 ~ thunkAPI:", thunkAPI);
		const response = await requestGetNews(query);
		return response.data.hits;
	}
);

export const setLoading = createAction('setLoading')

const initialState = {
	hits: [],
	loading: true,
	errorMessage: "",
	query: "",
};

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		setLoading: (state, action) => ({
			...state,
			loading: action.payload,
		}),
	},
	extraReducers: (builder) => {
		builder
			.addCase(handleFetchNews.fulfilled, (state, action) => {
				state.loading = false;
				state.hits = action.payload;
			})
			.addCase(handleFetchNews.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(handleFetchNews.rejected, (state, action) => {
				state.loading = false;
			}).addCase(setLoading, (state, action) => {
        state.loading = action.payload;
      })
	},
});

// export const { setLoading } = newsSlice.actions;
export default newsSlice.reducer;
