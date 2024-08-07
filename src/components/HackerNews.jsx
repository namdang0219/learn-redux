import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { handleFetchNews, setLoading } from "../redux-thunk/newsSlice";

const HackerNews = () => {
	const { hits, loading, errorMessage, query } = useSelector(
		(state) => state.news
	);
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(getNews(query));
		dispatch(handleFetchNews("css"));
	}, [dispatch, query]);

	const handleChangeQuery = debounce((e) => {
		// Logic code
		console.log("running");
		// dispatch(setQuery(e.target.value));
	}, 500);

	// const handleSetLoading = () => {
	// 	dispatch(otherAction({payload: false}))
	// }

	const handleSetLoading = () => {
		dispatch(setLoading(true));
	};

	return (
		<div className="w-2/4 p-5 mx-auto mt-5 mb-5 bg-white rounded-lg shadow-md">
			<div className="mb-5 gap-x-5">
				<input
					type="text"
					className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
					placeholder="Typing your keyword..."
					defaultValue={query}
					onChange={(e) => handleChangeQuery(e)}
				/>
			</div>
			<button
				onClick={handleSetLoading}
				className="flex items-center justify-center p-5 mx-auto text-white bg-blue-500 rounded"
			>
				Set Loading
			</button>
			{loading && (
				<div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin"></div>
			)}
			{!loading && errorMessage && (
				<p className="my-5 text-red-400">{errorMessage}</p>
			)}
			<div className="flex flex-wrap gap-5">
				{!loading &&
					hits.length > 0 &&
					hits.map((item, index) => {
						if (!item.title || item.title.length <= 0) return null;
						return (
							<h3
								key={item.title}
								className="p-3 bg-gray-100 rounded-md"
							>
								{item.title}
							</h3>
						);
					})}
			</div>
		</div>
	);
};

export default HackerNews;
