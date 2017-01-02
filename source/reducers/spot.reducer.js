import { combineReducers } from 'redux';
import { GET_SPOTS_SUCCESS, GET_SPOTS_ERROR, GET_SPOTS, ADD_SPOT } from '../actions/spots.action.js';

const initialState = {
    isGetting: false,
    spots: []
};

function spotReducer(state = initialState, action) { 
    switch(action.type) {
        case GET_SPOTS:
            return Object.assign({}, state, {
                isGetting: true
            });
        case GET_SPOTS_SUCCESS:
            return Object.assign({}, state, {
                isGetting: false,
                spots: action.spots.map(function(spot) {
                    return {
                        id: spot.id,
                        scheduledFor: new Date(spot.scheduledFor)
                    }
                })
            });
        default:
            return state;
    }
    /*if (action.type === ADD_SPOT) {
        var newState = {
            //spots: state.spots.concat([action.spot])
            spots: [ ...state.spots, action.spot]
        };

        return newState;
    }*/

    return state;
}

export default spotReducer;
