import { call, put } from "redux-saga/effects";
import requestGetNews from "./requests";
import { setLoading, setNews } from "./newsSlice";

export default function* handleGetNews(action) {
	const { payload } = action;
	try {
		yield put(setLoading(true));
		const respone = yield call(requestGetNews, payload);
		const { hits } = respone.data;
		yield put(setNews(hits));
		yield put(setLoading(false));
	} catch (error) {}
}
