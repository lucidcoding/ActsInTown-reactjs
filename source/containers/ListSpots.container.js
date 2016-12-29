import { connect } from 'react-redux';
import { addSpotAction } from '../actions/AddSpot.action.js';
import ListSpotsComponent from '../components/ListSpots.react.jsx';

const mapStateToProps = function(store){
    return {
        spots: store.addSpot.spots
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        add: function(){ dispatch(addSpotAction('Adding spot')); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSpotsComponent);
