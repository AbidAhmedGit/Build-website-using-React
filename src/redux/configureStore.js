import { createStore } from 'redux';

// importing the functions from reducer.js
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    // createStore is a redux function
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
};