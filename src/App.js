import React from 'react';
import { useDispatch } from 'react-redux';
// Import Components
import Sandwiches from './components/sandwiches';
import Orders from './components/orders';
import Details from './components/details';
// Import Services
import services from './services';
// Import Actions
import sandwichActions from './redux/sandwiches/actions';
import inventoryActions from './redux/inventories/actions';

import './App.css';

const App = () => {
  const [isLoading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setLoading(true);

    const data = services.getSandwiches();
    dispatch({ type: inventoryActions.SET_INVENTORIES, inventories: data.inventories });
    dispatch({ type: sandwichActions.SET_SANDWICHES, sandwiches: data.sandwiches });

    setLoading(false);
  }, []);

  return isLoading ? 
    <p>Loading...</p> : 
    (
      <div className="app">
        <Sandwiches />
        <div className="board">
          <Details />
          <Orders />
        </div>

      </div>
    );
}

export default App;
