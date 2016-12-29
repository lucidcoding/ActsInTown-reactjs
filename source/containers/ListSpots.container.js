var connect = require("react-redux").connect;
var addSpotAction = require('../actions/AddSpot.action.js');
var ListSpotsComponent = require('../components/ListSpots.react.jsx');

var mapStateToProps = function(store){
    return {
        spots: store.addSpot.spots
    };
};

var mapDispatchToProps = function(dispatch){
    return {
        add: function(){ dispatch(addSpotAction('Adding spot')); }
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ListSpotsComponent);
