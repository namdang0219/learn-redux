import { call, put } from "redux-saga/effects";
import requestGetNews from "./requests";
import { setNews } from "./newsSlice";

export default function* handleGetUser(action) {
	try {
		const respone = yield call(requestGetNews);
		const { hits } = respone.data;
		yield put(setNews(hits));
	} catch (error) {}
}
