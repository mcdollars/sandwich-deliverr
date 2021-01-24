import './index.css';

const Order = (props) => {
    const { order, cancelOrder } = props;
    const style = {
        backgroundImage: `url(/assets/images/${order && order.image})`
    }

    return (
        <div className="order">
            <div className="order-thumbnail" style={style}>
            </div>

            <div className="order-detail">
                <p><strong>{order.name}</strong></p>
                <p>$ {order.price}</p>
            </div>

            <div className="order-action">
                <button onClick={cancelOrder}>Remove</button>
            </div>
        </div>
    )
}

export default Order;
