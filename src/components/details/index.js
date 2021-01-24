import { useDispatch } from 'react-redux';
import orderActions from './../../redux/orders/actions';

import './index.css';

const Details = (props) => {
    const { sandwich, inventories } = props;
    const dispatch = useDispatch();

    const style = {
        backgroundImage: `url(/assets/images/${sandwich && sandwich.image})`
    }

    const isAvailable = () => {
        for (let key in Object.keys(sandwich.ingredients)) {
            if (inventories[key] < sandwich.ingredients[key]) {
                return false;
            }
        }

        return true;
    }

    const addOrder = () => {
        isAvailable() && dispatch({ type: orderActions.ADD_ORDER, newOrder: sandwich });
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
