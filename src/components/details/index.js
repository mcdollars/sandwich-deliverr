import { useDispatch, useSelector } from 'react-redux';
import orderActions from './../../redux/orders/actions';
import inventoryActions from './../../redux/inventories/actions';

import './index.css';

const Details = () => {
    const sandwich = useSelector(state => state.sandwiches.choose);
    const inventories = useSelector(state => state.inventories);

    const dispatch = useDispatch();

    const style = {
        backgroundImage: `url(/assets/images/${sandwich && sandwich.image})`
    }

    const isAvailable = () => {
        for (let key of Object.keys(sandwich.ingredients)) {
            if (inventories[key] < sandwich.ingredients[key]) {
                return false;
            }
        }

        return true;
    }

    const addOrder = () => {
        if (isAvailable()) {
            dispatch({ type: inventoryActions.REMOVE_INVENTORIES, inventories: sandwich.ingredients });
            dispatch({ type: orderActions.ADD_ORDER, newOrder: sandwich });
        }
    }

    return sandwich ? (
        <div className="details">
            <div className="details-box">
                <div className="details-thumbnail" style={style}></div>
                {
                    isAvailable() ? 
                        <button onClick={addOrder}>$ {sandwich.price} Order</button> : 
                        <button disabled>$ {sandwich.price} Order</button>
                    }
                
            </div>

            <div className="details-summary">
                <p><strong>Name: </strong>&nbsp;&nbsp;{sandwich.name}</p>
                <p><strong>Ingredients</strong></p>
                <ul>
                    { Object.keys(sandwich.ingredients).map(key => <li key={key}>{key}</li>) }
                </ul>
            </div>
            
        </div>
    ) : <div>Select One</div>;
};

export default Details;
