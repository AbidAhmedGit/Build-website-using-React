import {createStore, combineReducers} from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
    // createStore is a redux function
    const store = createStore(
        // all the reducers passed in as property
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );

    return store;
};