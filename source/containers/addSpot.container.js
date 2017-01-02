import { connect } from 'react-redux';
import { addSpot, getSpots, getSpotsError, getSpotsSuccess } from '../actions/spots.action.js';
import AddSpotComponent from '../components/addSpot.component.jsx';

const mapStateToProps = function(store){
    return {
        status: store.spots.status
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        add: function(){ 
            dispatch(addSpot({ 
                townId: '1c6a404e-8ff3-11e6-8dd0-089e01bdf73e',
                sheduledFor: '2017-02-10 10:00:00' 
            })); 
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSpotComponent);
