import { combineReducers } from 'redux';
import addSpotReducer from './AddSpot.reducer.js';

const reducers = combineReducers({
    addSpot: addSpotReducer
});

export default reducers;
