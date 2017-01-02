import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import Reducer from '../reducers/index.js';

function configureStore(preloadedState) {
    return createStore(
            Reducer,
            preloadedState,
            applyMiddleware (
                thunkMiddleware
            )
        )
};

const store = configureStore();

export default store;
