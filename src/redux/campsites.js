// import data from the shared folder
import { CAMPSITES } from '../shared/campsites';

// a default state=campsites exists because the first
// time the reducer is called there is no state
export const Campsites = (state = CAMPSITES, action) => {
    switch (action.type) {
        default:
            return state;
    }
};