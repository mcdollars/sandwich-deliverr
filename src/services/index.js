import data from './mock/data.json';

const getSandwiches = () => {
    return { 
        sandwiches: data.menu,
        inventories: data.inventory
    };
};

export default {
    getSandwiches
};
