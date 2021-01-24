import actions from './actions';

const initalState = [];

export default function orderReducer(state = initalState, action) {
    switch (action.type) {
        case actions.ADD_ORDER:
            return [action.newOrder, ...state];
        case actions.CANCEL_ORDER:
            return state.filter((order, index) => index !== action.orderIndex);
        default:
            return state;
    }
}
