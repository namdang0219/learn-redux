import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newsSlice";
import handleGetUser from "./handler";

export default function* newsSaga() {
	yield takeLatest(getNews.type, handleGetUser);
}
