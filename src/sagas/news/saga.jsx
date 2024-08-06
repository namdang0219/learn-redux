import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newsSlice";
import handleGetNews from "./handler";

export default function* newsSaga() {
	yield takeLatest(getNews.type, handleGetNews);
}

/**
 * blocking vs non-blocking
 * blocking: call / put - fetch api after before action done
 * none-blocking: fork - fetch api without caring before action complete
 * 
 * all - fork
 * all = promise.all
 * 
 * 
 * 
 * 
 * 
 * 
 */

