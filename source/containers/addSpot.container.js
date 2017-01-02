import { connect } from 'react-redux';
import { addSpot, getSpots, getSpotsError, getSpotsSuccess } from '../actions/spots.action.js';
import AddSpotComponent from '../components/addSpot.component.jsx';

const mapStateToProps = function(store){
    return {
        spots: store.addSpot.spots
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        add: function(){ 
            dispatch(addSpot('Adding spot')); 
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSpotComponent);
