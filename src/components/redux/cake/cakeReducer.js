import { BUY_CAKE } from './cakeTypes';

const intitalState = {
	numOfCakes: 10,
};

const cakeReducer = (state = intitalState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};
		default:
			return state;
	}
};

export default cakeReducer;
