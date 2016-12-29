var combineReducers = require('redux').combineReducers;
var addSpotReducer = require('./AddSpot.reducer.js');

var Reducers = combineReducers({
    addSpot: addSpotReducer
});

module.exports = Reducers;
