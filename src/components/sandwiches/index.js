import { useDispatch, useSelector } from 'react-redux';
import sandwichActions from './../../redux/sandwiches/actions';

import Sandwich from './single';
import './index.css';

const Sandwiches = () => {
    const sandwiches = useSelector(state => state.sandwiches.all);
    const dispatch = useDispatch();

    const onChooseSandwich = (sandwich) => {
        dispatch({ type: sandwichActions.CHOOSE_SANDWICH, sandwich });
    }

    return (
        <div className="sandwiches">
            {sandwiches && sandwiches.map((sandwich) => <Sandwich key={sandwich.name} sandwich={sandwich} chooseSandwich={onChooseSandwich} />)}
        </div>
    )
};

export default Sandwiches;
