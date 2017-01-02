import axios from 'axios';

export const GET_SPOTS_SUCCESS = 'GET_SPOTS_SUCCESS';
export const GET_SPOTS_ERROR = 'GET_SPOTS_ERROR';
export const GET_SPOTS = 'GET_SPOTS';
export const ADD_SPOT_REQUEST = 'ADD_SPOT_REQUEST';
export const ADD_SPOT_SUCCESS = 'ADD_SPOT_SUCCESS';
export const ADD_SPOT_ERROR = 'ADD_SPOT_ERROR';

function addSpotRequest(data) {
    return {
        type: ADD_SPOT_REQUEST
    };
}

function addSpotSuccess(response) {
    return {
        type: ADD_SPOT_SUCCESS
    };
}

function addSpotError(error) {
    return {
        type: ADD_SPOT_ERROR,
        error: error
    };
}

export function addSpot(data) {
    return function (dispatch) {
        dispatch(addSpotRequest(data));

        return axios.post('https://localhost:8443/ActsInTown-api/spot/for-test-user', data)
            .then(function (response) {
                dispatch(addSpotSuccess(response));
            })
            .catch(function (error) {
                console.log('Error getting spots: ' + error);
                dispatch(addSpotError(error));
            });
    };
}

function getSpotsRequest() {
    return {
        type: GET_SPOTS
    };
}

function getSpotsSuccess(response) {
    return {
        type: GET_SPOTS_SUCCESS,
        spots: response.data,
        receivedAt: Date.now()
    };
}

function getSpotsError(error) {
    return {
        type: GET_SPOTS_ERROR,
        error: error,
        receivedAt: Date.now()
    };
}

export function getSpots() {
    return function (dispatch) {
        dispatch(getSpotsRequest());

        return axios.get('https://localhost:8443/ActsInTown-api/spot/for-test-user')
            .then(function (response) {
                dispatch(getSpotsSuccess(response));
            })
            .catch(function (error) {
                console.log('Error getting spots: ' + error);
                dispatch(getSpotsError(error));
            });
    };
}

