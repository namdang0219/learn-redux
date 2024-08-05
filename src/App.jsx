import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./sagas/news/newsSlice";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getNews());
	}, [dispatch]);

	const hits = useSelector((state) => state.news.hits);
	console.log("🚀 ~ App ~ hits:", hits)

	return <div className="p-5"></div>;
};

export default App;
