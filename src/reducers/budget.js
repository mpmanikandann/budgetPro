import { ADD_BUDGET, LOAD_BUDGET } from "../utils/actionTypes";

export default (state = [], action) => {
	switch (action.type) {
	case LOAD_BUDGET:
		return action.payload.data;
	case ADD_BUDGET:
		return [...state, action.payload.data];
	default:
		return state;
	}
};
