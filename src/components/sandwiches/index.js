import { useDispatch } from 'react-redux';
import sandwichActions from './../../redux/sandwiches/actions';

import Sandwich from './single';
import './index.css';

const Sandwiches = (props) => {
    const { sandwiches } = props;
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
