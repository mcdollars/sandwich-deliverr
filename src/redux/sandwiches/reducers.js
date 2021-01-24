import actions from './actions';

import { getImage } from './../../utils';

const initialState = {
    all: [],
    choose: null
};

export default function sandwichesReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_SANDWICHES:
            return { ...state, all: action.sandwiches.map(sandwich => ({ ...sandwich, image: getImage(sandwich.name) })) };
        case actions.CHOOSE_SANDWICH:
            return { ...state, choose: action.sandwich };
        default:
            return state;
    }
};
