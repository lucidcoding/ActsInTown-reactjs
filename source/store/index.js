import { createStore } from 'redux';
import Reducer from '../reducers/index.js';

const store = createStore(Reducer);

export default store;
