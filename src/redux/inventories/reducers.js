import actions from './actions';

const initialState = {};

const removeInventories = (state, inventories) => {
    for(let key in Object.keys(inventories)) {
        const value = inventories[key];
        state[key] -= value;
    }

    return state;
}

export default function inventoriesReducer(state = initialState, action) {
    switch(action.type) {
        case actions.SET_INVENTORIES:
            console.log("inventories", { action });
            return { ...action.inventories };
        case actions.REMOVE_INVENTORIES:
            return removeInventories(state, action.inventories);
        default:
            return state;
    }
};
