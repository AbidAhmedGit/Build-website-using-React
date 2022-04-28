// import data from the shared folder
import { COMMENTS } from '../shared/comments';

// a default exists because the first
// time the reducer is called there is no state
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        default:
            return state;
    }
};