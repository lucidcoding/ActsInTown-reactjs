import axios from 'axios';
import { connect } from 'react-redux';
import { addSpot, getSpots, getSpotsError, getSpotsSuccess } from '../actions/spots.action.js';
import ListSpotsComponent from '../components/listSpots.component.jsx';

const mapStateToProps = function(store){
    return {
        spots: store.addSpot.spots
    };
};

const mapDispatchToProps = function(dispatch){
    return {
        getSpots: function() {
            dispatch(getSpots());
         
            /*axios.get('https://localhost:8443/ActsInTown-api/spot/for-test-user')
                .then(function (response) {
                    dispatch(getSpotsSuccess(response));
                })
                .catch(function (error){
                    console.log('Error getting spots: ' + error);
                    dispatch(getSpotsError(error));
                });*/
        },
        add: function() { 
            dispatch(addSpot('Adding spot')); 
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSpotsComponent);
