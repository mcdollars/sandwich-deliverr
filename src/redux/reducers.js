import { combineReducers } from 'redux';
import orders from './orders/reducers';
import inventories from './inventories/reducers';
import sandwiches from './sandwiches/reducers';

const reducers = combineReducers({
    orders,
    inventories,
    sandwiches,
});

export default reducers;
