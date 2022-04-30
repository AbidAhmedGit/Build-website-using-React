// import data from the shared folder
import { PARTNERS } from '../shared/partners';
import * as ActionTypes from './ActionTypes';

// a default exists because the first
// time the reducer is called there is no state
export const Partners = (state = { isLoading: true,
                                    errMess: null,
                                    partners: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARTNERS:
            return {...state, isLoading: false, errMess: null, partners: action.payload};

        case ActionTypes.PARTNERS_LOADING:
            return {...state, isLoading: true, errMess: null, partners: []}

        case ActionTypes.PARTNERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
        }
};