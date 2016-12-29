var createStore = require('redux').createStore;
var Reducer = require('../reducers/index.js');

var store = createStore(Reducer);

module.exports = store;
