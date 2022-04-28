// import data from the shared folder
import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// a default exists because the first
// time the reducer is called there is no state
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
};