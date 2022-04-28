// import data from the shared folder
import { PARTNERS } from '../shared/partners';

// a default exists because the first
// time the reducer is called there is no state
export const Partners = (state = PARTNERS, action) => {
    switch (action.type) {
        default:
            return state;
    }
};