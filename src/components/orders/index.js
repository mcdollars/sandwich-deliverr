import Order from './single';

import { useDispatch } from 'react-redux';
import orderActions from './../../redux/orders/actions';

import './index.css';

const Orders = (props) => {
    const { orders } = props;
    const dispatch = useDispatch();

    const total = () => {
        if (!orders || orders.length === 0) return 0;
        return parseFloat(orders.reduce((value, order) => value + order.price, 0 )).toFixed(2);
    }

    const cancelOrder = (orderIndex) => {
        dispatch({ type: orderActions.CANCEL_ORDER, orderIndex });
    }

    return (
        <div className="orders">
            <div className="orders-title">
                <h3>Order List</h3>
                <p>Total: ${total()}</p>
            </div>

            {orders && orders.map((order, index) => <Order key={index} order={order} cancelOrder={() => cancelOrder(index)}/>)}
        </div>
    )
}

export default Orders;
