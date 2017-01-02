import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import spotReducer from './spot.reducer.js';

const reducers = combineReducers({
    spots: spotReducer,
    routing: routerReducer
});

export default reducers;
