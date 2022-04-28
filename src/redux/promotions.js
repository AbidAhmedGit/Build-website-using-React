// import data from the shared folder
import { PROMOTIONS } from '../shared/promotions';

// a default exists because the first
// time the reducer is called there is no state
export const Promotions = (state = PROMOTIONS, action) => {
    switch (action.type) {
        default:
            return state;
    }
};