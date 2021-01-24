import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import Components
import Sandwiches from './components/sandwiches';
import Orders from './components/orders';
import Details from './components/details';
// Import Services
import services from './services';

import './App.css';

const App = () => {
  const [isLoading, setLoading] = React.useState(false);
  const inventories = useSelector(state => state.inventories);
  const orders = useSelector(state => state.orders);
  const sandwich = useSelector(state => state.sandwiches.choose);
  const sandwiches = useSelector(state => state.sandwiches.all);
  const dispatch = useDispatch();

  React.useEffect(async () => {
    setLoading(true);

    const data = services.getSandwiches();
    await dispatch({ type: 'inventories/SET_INVENTORIES', inventories: data.inventories });
    await dispatch({ type: 'sandwiches/SET_SANDWICHES', sandwiches: data.sandwiches });

    setLoading(false);
  }, []);

  return isLoading ? 
    <p>Loading...</p> : 
    (
      <div className="app">
        <Sandwiches sandwiches={sandwiches} />
        <div className="board">
          <Details sandwich={sandwich} inventories={inventories} />
          <Orders orders={orders} />
        </div>
      </div>
    );
}

export default App;
