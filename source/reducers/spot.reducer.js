import { combineReducers } from 'redux';
import { GET_SPOTS_SUCCESS, GET_SPOTS_ERROR, GET_SPOTS, 
    ADD_SPOT_REQUEST, ADD_SPOT_SUCCESS, ADD_SPOT_ERROR } from '../actions/spots.action.js';

//Status of state:
export const SPOTS_STATUS = {
    INITIAL: 0,
    GETTING: 1,
    GET_SUCCESS: 2,
    GET_ERROR: 3,
    ADDING: 4,
    ADD_SUCCESS: 5,
    ADD_ERROR: 6
};

const initialState = {
    status: SPOTS_STATUS.INITIAL,
    spots: []
};

function spotReducer(state = initialState, action) { 
    switch(action.type) {
        case GET_SPOTS:
            return Object.assign({}, state, {
                status: SPOTS_STATUS.GETTING
            });
        case GET_SPOTS_SUCCESS:
            return Object.assign({}, state, {
                status: SPOTS_STATUS.GET_SUCCESS,
                spots: action.spots.map(function(spot) {
                    return {
                        id: spot.id,
                        scheduledFor: new Date(spot.scheduledFor)
                    }
                })
            });
        case GET_SPOTS_ERROR:
            return Object.assign({}, state, {
                status: SPOTS_STATUS.GET_ERROR,
                error: action.error
            });
        case ADD_SPOT_REQUEST:
            return Object.assign({}, state, {
                status: SPOTS_STATUS.ADDING
            });
        case ADD_SPOT_SUCCESS: 
            return Object.assign({}, state, {
                status: SPOTS_STATUS.ADD_SUCCESS
            });
        case ADD_SPOT_ERROR: 
            return Object.assign({}, state, {
                status: SPOTS_STATUS.ADD_ERROR
            });
        default:
            return state;
    }

    return state;
}

export default spotReducer;
