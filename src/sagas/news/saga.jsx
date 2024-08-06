import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newsSlice";
import handleGetNews from "./handler";

export default function* newsSaga() {
	yield takeLatest(getNews.type, handleGetNews);
}
