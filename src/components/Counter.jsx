import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { down, up, downByValue, upByValue } from "../redux-toolkit/counterSlice";

const Counter = () => {
	const { count } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const handleDown = () => {
		dispatch(down());
	};

	const handleUp = () => {
		dispatch(up());
	};

	const handleDownValue = (value) => {
		dispatch(downByValue({ value: value }));
	};

	const handleUpValue = (value) => {
		dispatch(upByValue({ value: value }));
	};

	return (
		<div className="flex items-center">
			<div className="mx-auto w-[600px] p-5 border border-gray-200 rounded-lg">
				<div className="text-center text-2xl mb-5">Counter {count}</div>
				<div className="flex gap-5">
					<div className="flex-1">
						<Button onClick={() => handleDownValue(10)}>
							Down 10
						</Button>
					</div>
					<div className="flex-1">
						<Button onClick={handleDown}>Down</Button>
					</div>
					<div className="flex-1">
						<Button onClick={handleUp}>Up</Button>
					</div>
					<div className="flex-1">
						<Button onClick={() => handleUpValue(10)}>Up 10</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

const Button = ({ children = "button", onClick = () => {} }) => {
	return (
		<button
			onClick={onClick}
			className="w-full px-6 py-3 text-center text-white bg-blue-500 hover:bg-blue-600 transition-all rounded-lg"
		>
			{children}
		</button>
	);
};

export default Counter;
