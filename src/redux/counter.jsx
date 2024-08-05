const DOWN = "DOWN";
const UP = "UP";

const initialState = {
	count: 0,
};

export const countUpValue = (value) => {
	return { type: "COUNT_UP_VALUE", payload: value };
};

export const countDownValue = (value) => {
	return { type: "COUNT_DOWN_VALUE", payload: value };
};

export const countReducer = (state = initialState, action) => {
	switch (action.type) {
		case DOWN:
			return {
				...state,
				count: state.count - 1,
			};

		case UP:
			return {
				...state,
				count: state.count + 1,
			};

		case "COUNT_UP_VALUE":
			return {
				...state,
				count: state.count + action.payload,
			};

		case "COUNT_DOWN_VALUE":
			return {
				...state,
				count: state.count - action.payload,
			};

		default:
			return state;
	}
};
