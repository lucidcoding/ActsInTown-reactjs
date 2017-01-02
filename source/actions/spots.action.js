import axios from 'axios';

let nextId = 2;

export const GET_SPOTS_SUCCESS = 'GET_SPOTS_SUCCESS';
export const GET_SPOTS_ERROR = 'GET_SPOTS_ERROR';
export const GET_SPOTS = 'GET_SPOTS';
export const ADD_SPOT = 'ADD_SPOT';

export function addSpot(text) {
    return {
        type: ADD_SPOT,
        spot: {
            id: nextId++,
            text: text
        }
    };
}

export function getSpotsSuccess(response) {
    return {
        type: GET_SPOTS_SUCCESS,
        spots: response.data,
        receivedAt: Date.now()
    }
}

export function getSpotsError(error) {
    return {
        type: GET_SPOTS_ERROR,
        error: error,
        receivedAt: Date.now()
    }
}

export function getSpots() {
    return function (dispatch) {
        var action = {
            type: GET_SPOTS
        };

        dispatch(action);

        return axios.get('https://localhost:8443/ActsInTown-api/spot/for-test-user')
            .then(function (response) {
                dispatch(getSpotsSuccess(response));
            })
            .catch(function (error) {
                console.log('Error getting spots: ' + error);
                dispatch(getSpotsError(error));
            });
    } 
    /*return {
        type: GET_SPOTS
    };*/
}

