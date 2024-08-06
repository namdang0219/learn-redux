import { call, put, select } from "redux-saga/effects";
import requestGetNews from "./requests";
import { setLoading, setNews } from "./newsSlice";

export default function* handleGetNews(action) {
	const { payload } = action;
	let query = "";
	try {
		// select is used into a function
		const newsQuery = yield select((state) => state.news.query);
		if (newsQuery === "") query = "react";
		else query = payload;
		yield put(setLoading(true));
		const respone = yield call(requestGetNews, query);
		const { hits } = respone.data;
		yield put(setNews(hits));
		yield put(setLoading(false));
	} catch (error) {}
}
