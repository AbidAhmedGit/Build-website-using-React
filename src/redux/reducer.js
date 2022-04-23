import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

// adding the word export to export the functions
export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

// returns the state that was passed in
export const Reducer = (state = initialState, action) => {
    return state;
};