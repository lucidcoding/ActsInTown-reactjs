import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import addSpotReducer from './AddSpot.reducer.js';

const reducers = combineReducers({
    addSpot: addSpotReducer,
    routing: routerReducer
});

export default reducers;
