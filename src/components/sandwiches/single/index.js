import './index.css';

const Sandwich = (props) => {
    const { sandwich, chooseSandwich } = props;
    const style = {
        backgroundImage: `url(/assets/images/${sandwich.image})`,
    }

    return (
        <div className="sandwich" onClick={() => chooseSandwich(sandwich)}>
            <div className="sandwich-image" style={style}>
                $ { sandwich.price }
            </div>
            <h5>{ sandwich.name }</h5>
        </div>
    )
}

export default Sandwich;
