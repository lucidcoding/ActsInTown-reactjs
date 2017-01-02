import axios from 'axios';
import { connect } from 'react-redux';
import { addSpot, getSpots, getSpotsError, getSpotsSuccess } from '../actions/spots.action.js';
import ListSpotsComponent from '../components/listSpots.component.jsx';

const mapStateToProps = function(store){
    return {
        spots: store.spots.spots
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
            dispatch(addSpot({ 
                townId: '1c6a404e-8ff3-11e6-8dd0-089e01bdf73e',
                sheduledFor: '2017-02-10 10:00:00' 
            })); 
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSpotsComponent);
