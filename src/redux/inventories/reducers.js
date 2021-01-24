import actions from './actions';

const initialState = {};

const addInventories = (state, inventories) => {
    const inventory = { ...state };
    for (let key of Object.keys(inventories)) {
        const value = inventories[key];
        inventory[key] += value;
    }

    console.log({ inventory });

    return inventory;
}

const removeInventories = (state, inventories) => {
    const inventory = { ...state };
    for (let key of Object.keys(inventories)) {
        console.log(key);
        inventory[key] -= inventories[key];
    }

    console.log({ inventory, inventories });

    return inventory;
}

export default function inventoriesReducer(state = initialState, action) {
    switch(action.type) {
        case actions.SET_INVENTORIES:
            return { ...action.inventories };
        case actions.ADD_INVENTORIES:
            return addInventories(state, action.inventories);
        case actions.REMOVE_INVENTORIES:
            return removeInventories(state, action.inventories);
        default:
            return state;
    }
};
